(this.webpackJsonpcra=this.webpackJsonpcra||[]).push([[6],{210:function(e,n,a){"use strict";a.r(n);var r,t,i,l,o,s=a(1),m=a.n(s),d=a(102),c=a(103),p=a(8),b=a(9),u=b.b.main(r||(r=Object(p.a)(["\n  margin-left: 80px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]))),g=b.b.form(t||(t=Object(p.a)(["\n  min-width: 500px;\n  padding: 2rem;\n  font-size: 1rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  font-family: Arial, Helvetica, sans-serif;\n  line-height: 1.2;\n  letter-spacing: 1px;\n  text-transform: capitalize;\n  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);\n\n  .forgot-password {\n    font-size: 0.8rem;\n    margin-top: 0.5rem;\n    margin-left: 70%;\n    text-decoration: underline;\n    cursor: pointer;\n    color: rgba(29, 8, 8, 0.521);\n  }\n  .forgot-password:hover {\n    cursor: pointer;\n    color: rgba(34, 34, 34, 0.774);\n  }\n"]))),f=b.b.div(i||(i=Object(p.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  margin-left: 10px;\n  margin-bottom: 2rem;\n  & p {\n    color: red;\n    font-weight: bold;\n    margin-top: 0.5rem;\n    font-size: 0.8rem;\n  }\n"]))),h=b.b.input(l||(l=Object(p.a)(["\n  width: 100%;\n  height: 2rem;\n  margin-top: 10px;\n  padding: 0.5rem;\n  color: #222;\n  border-bottom: 2px solid #e0e0e0;\n"]))),w=b.b.button(o||(o=Object(p.a)(["\n  color: #fff;\n  cursor: pointer;\n  width: 80%;\n  height: 2.5rem;\n  margin: 5px auto;\n  border-radius: 20px;\n  transition: all 0.3s linear;\n  background: rgb(3, 247, 212);\n  background: linear-gradient(\n    90deg,\n    rgba(3, 247, 212, 1) 20%,\n    rgba(56, 29, 163, 1) 50%,\n    rgba(243, 0, 255, 1) 80%\n  );\n"])));n.default=function(){var e=c.a({name:c.b().required("This feild is Required"),email:c.b().email("Invalid email format").required("This feild is Required"),password:c.b().required("No password provided.").min(8,"Password is too short - should be 8 chars minimum.").matches(/[a-zA-Z]/,"Password can only contain Latin letters.")}),n=Object(d.a)({initialValues:{bankName:"",cost:123,time:""},onSubmit:function(e){console.log("from data : ",e)},validationSchema:e});return m.a.createElement(u,null,m.a.createElement(g,{onSubmit:n.handleSubmit},m.a.createElement(f,null,m.a.createElement("label",{htmlFor:"name"},"Name:"),m.a.createElement(h,Object.assign({type:"text",id:"name",name:"name",placeholder:"Name"},n.getFieldProps("name"))),n.errors.name?m.a.createElement("p",null,n.errors.name):null),m.a.createElement(f,null,m.a.createElement("label",{htmlFor:"email"},"Email:"),m.a.createElement(h,Object.assign({type:"email",id:"email",name:"email",placeholder:"Email"},n.getFieldProps("email"))),n.touched.email&&n.errors.email?m.a.createElement("p",null,n.errors.email):null),m.a.createElement(f,null,m.a.createElement("label",{htmlFor:"password"},"password:"),m.a.createElement(h,Object.assign({type:"password",id:"password",name:"password",placeholder:"Password"},n.getFieldProps("password"))),n.touched.password&&n.errors.password?m.a.createElement("p",null,n.errors.password):null,m.a.createElement("h4",{className:"forgot-password"},"forgot password")),m.a.createElement(w,{type:"submit"},"Submit")))}}}]);
//# sourceMappingURL=6.228e1bbd.chunk.js.map