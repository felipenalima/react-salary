(this["webpackJsonpfer-cap02-aula02"]=this["webpackJsonpfer-cap02-aula02"]||[]).push([[0],{35:function(e,a,t){e.exports=t(66)},41:function(e,a,t){},66:function(e,a,t){"use strict";t.r(a);var n=t(1),r=t.n(n),l=t(30),c=t.n(l),o=(t(40),t(41),t(18)),i=[{id:1,minValue:0,maxValue:1045,difference:1045,discountPercentage:.075,discountValue:-1},{id:2,minValue:1045.01,maxValue:2089.6,difference:1044.6,discountPercentage:.09},{id:3,minValue:2089.61,maxValue:3134.4,difference:3134.4-2089.6,discountPercentage:.12},{id:4,minValue:3134.41,maxValue:6101.06,difference:6101.06-3134.4,discountPercentage:.14}];function s(e){return+e.toFixed(2)}function u(e){var a=new Intl.NumberFormat([],{style:"currency",currency:"BRL"}),t=+e,n=function(e){var a=0;if(e>6101.07)return 713.1;for(var t=0;t<i.length;t++){var n=i[t];if(!(e>n.maxValue)){a+=s((e-n.minValue)*n.discountPercentage);break}a+=s(n.difference*n.discountPercentage)}return a=s(a)}(t),r=t-n,l=function(e){var a=e<1903.98?0:e<2826.65?s(.075*e)-142.8:e<3751.05?s(.15*e)-354.8:e<4664.68?s(.225*e)-636.13:s(.275*e)-869.36;return a=s(a)}(r),c=t-n-l,o=+(n/e*100).toFixed(2),u=+(l/e*100).toFixed(2),m=+(c/e*100).toFixed(2);return{baseINSS:a.format(t),discountINSS:a.format(n),baseIRPF:a.format(r),discountIRPF:a.format(l),netSalary:a.format(c),percentINSS:o,percentIRPF:u,percentNetSalary:m}}function m(e){var a=e.data,t=e.onChangeData,n=a.salary;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:" input-field container",style:{marginBottom:"50px"}},r.a.createElement("input",{autoFocus:!0,id:"inputSalary",type:"number",value:n,min:"100",step:"100",onChange:function(e){t(e.target.value)},style:{color:"#ffffff"}}),r.a.createElement("label",{htmlFor:"inputSalary",className:"active"},"Sal\xe1rio Bruto:")))}function f(e){var a=e.data,t=a.baseINSS,n=a.discountINSS,l=a.baseIRPF,c=a.discountIRPF,o=a.netSalary,i=a.percentageINSS,s=a.percentageIRPF,u=a.percentageNetSalary;return r.a.createElement("div",{className:"center row "},r.a.createElement("div",{className:"col input-field"},r.a.createElement("input",{value:t,style:d.fontBaseInss,readOnly:!0}),r.a.createElement("label",{htmlFor:"baseINSS",className:"active"},"Base INSS:")),r.a.createElement("div",{className:"col input-field"},r.a.createElement("input",{value:"".concat(n," (").concat(i," %)"),style:d.fontDiscountInss,readOnly:!0}),r.a.createElement("label",{htmlFor:"discountINSS",className:"active"},"Desconto INSS:")),r.a.createElement("div",{className:"col input-field"},r.a.createElement("input",{value:l,style:d.fontBaseIrpf,readOnly:!0}),r.a.createElement("label",{htmlFor:"baseIRPF",className:"active"},"Base IRPF:")),r.a.createElement("div",{className:"col input-field"},r.a.createElement("input",{value:"".concat(c," (").concat(s," %)"),style:d.fontDiscountIrpf,readOnly:!0}),r.a.createElement("label",{htmlFor:"discountIRPF",className:"active"},"Desconto IRPF:")),r.a.createElement("div",{className:"col input-field"},r.a.createElement("input",{value:"".concat(o," (").concat(u," %)"),style:d.fontNetSalary,readOnly:!0}),r.a.createElement("label",{htmlFor:"netSalary",className:"active"},"Sal\xe1rio L\xedquido:")))}var d={fontBaseInss:{color:"#ffffff"},fontBaseIrpf:{color:"#ffffff"},fontDiscountInss:{color:"#e67e22"},fontDiscountIrpf:{color:"#c0392b"},fontNetSalary:{color:"#16a085"}},S=t(32);function b(e){var a=e.data,t=a.percentageINSS,n=a.percentageIRPF,l=a.percentageNetSalary;return r.a.createElement("div",null,r.a.createElement(S.a,{className:"container",colorType:"literal",showLabels:!0,labelsRadiusMultiplier:1.1,labelsStyle:{stroke:"rgb(255, 255, 255)",height:40,fontSize:12},data:[{angle:Number(l),radius:10,label:"Sal\xe1rio L\xedquido",subLabel:"".concat(l,"%"),stroke:"#000",color:"rgb(22,160,133)"},{angle:Number(n),radius:10,label:"Desconto IRPF",subLabel:"".concat(n,"%"),stroke:"#000",color:"rgb(192,57,43)"},{angle:Number(t),radius:10,label:"Desconto INSS",subLabel:"".concat(t,"%"),stroke:"#000",color:"rgb(230,126,34)"}],width:300,height:315}))}function p(){var e=Object(n.useState)(1024),a=Object(o.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)([]),i=Object(o.a)(c,2),s=i[0],d=i[1];Object(n.useEffect)((function(){var e=u(t);d({baseINSS:e.baseINSS,discountINSS:e.discountINSS,baseIRPF:e.baseIRPF,discountIRPF:e.discountIRPF,netSalary:e.netSalary,percentageINSS:e.percentINSS,percentageIRPF:e.percentIRPF,percentageNetSalary:e.percentNetSalary})}),[t]);return r.a.createElement("div",{style:I.background},r.a.createElement("div",{className:"container"},r.a.createElement("div",null,r.a.createElement("h1",{className:"center",style:{marginBottom:"50px",color:"#ffffff"}},"React Salary")),r.a.createElement("div",null,r.a.createElement(m,{data:{salary:t},onChangeData:function(e){l(e)}})),r.a.createElement("div",null,r.a.createElement(f,{data:s})),r.a.createElement("div",null,r.a.createElement(b,{data:s}))))}var I={background:{backgroundColor:"#072023",display:"flex",height:"800px"}};c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(p,null)),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.9032d9fa.chunk.js.map