// import ShallowRenderer from 'react-test-renderer/shallow';
import App from '../App'
import Enzyme,{shallow,mount} from 'enzyme'
import adpater from '@wojtekmaj/enzyme-adapter-react-17'
Enzyme.configure({adapter:new adpater()})
describe("react-test-render", () => {
  it("app",()=>{
    let app = shallow(<App/>)
    expect(app.find("h1").text()).toEqual("todo")
  })

  it("删除功能",()=>{
    let app = mount(<App/>)
    let todolength = app.find("li").length
    app.find("button.del").at(0).simulate('click')
    expect(app.find("li").length).toEqual(todolength - 1)
  })

  it("添加功能",()=>{
    let app = mount(<App/>)
    let todolength = app.find("li").length
    let addInput = app.find('input')
    addInput.value = 'aaaa'
    app.find("button.add").at(0).simulate('click')
    expect(app.find("li").length).toEqual(todolength + 1)
  })
})
