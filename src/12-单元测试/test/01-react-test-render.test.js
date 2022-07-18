import ShallowRenderer from 'react-test-renderer/shallow';
import App from '../App'
describe("react-test-render", () => {
  it("",()=>{
    const render = new ShallowRenderer()
    render.render(<App/>)
    // console.log(render.getRenderOutput().props.children[0].type);
    expect(render.getRenderOutput().props.children[0].type).toBe('h1')
  })
})
