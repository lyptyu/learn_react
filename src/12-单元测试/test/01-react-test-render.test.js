import ShallowRenderer from 'react-test-renderer/shallow';
import App from '../App'
import ReactTestUtil from 'react-dom/test-utils';
describe("react-test-render", () => {
  it("",()=>{
    const render = new ShallowRenderer()
    render.render(<App/>)
    // console.log(render.getRenderOutput().props.children[0].type);
    expect(render.getRenderOutput().props.children[0].type).toBe('h1')
  })

  it("删除功能",()=>{
    const app = ReactTestUtil.renderIntoDocument(<App/>)
    let todoItems = ReactTestUtil.scryRenderedDOMComponentsWithTag(app,"li")
    console.log(todoItems.length);

    let deleteButton = todoItems[0].querySelector("button")
    ReactTestUtil.Simulate.click(deleteButton)

    let todoItemsAfterClick = ReactTestUtil.scryRenderedDOMComponentsWithTag(app,"li")
    expect(todoItems.length-1).toBe(todoItemsAfterClick.length)
  })

  it("添加功能",()=>{
    const app = ReactTestUtil.renderIntoDocument(<App/>)
    let todoItems = ReactTestUtil.scryRenderedDOMComponentsWithTag(app,"li")
    console.log(todoItems.length);

    let addInput = ReactTestUtil.scryRenderedDOMComponentsWithTag(app,"input")

    addInput.value = 'aaaa'
    let addButton = ReactTestUtil.findRenderedDOMComponentWithClass(app,'add')
    ReactTestUtil.Simulate.click(addButton)
    let todoItemsAfterClick = ReactTestUtil.scryRenderedDOMComponentsWithTag(app,"li")
    expect(todoItems.length+1).toBe(todoItemsAfterClick.length)
  })
})
