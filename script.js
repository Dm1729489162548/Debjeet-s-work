// console.log("Debjeet's Webpage");
alert("Ready to see the magic");
// // console.log(document);
//  document.body.childNodes[3].innerText="WebDevelopement";
document.body.style.background="red";
// let heading=document.getElementById("heading1");
// console.dir(heading);
// let head=document.getElementById("heading2");
// console.dir(head);
// let others=document.getElementsByClassName("others-class");
// console.dir(others);
// console.log(others);
// let paras=document.getElementsByTagName("p");
// console.dir(paras);
// let first_element=document.querySelector("#heading1");
// console.dir(first_element);
// // let allElements=document.querySelectorAll("p");
// // console.dir(allElements);

// let fEl=document.querySelector("#heading1");
// console.dir(fEl);
// console.log(fEl.tagName);
// let element=document.querySelector(".others-class");
// console.dir(element);
//  console.log(element.tagName);
//  console.dir(document.body.firstChild);
//  console.dir(document.body.lastChild);     
 let div=document.querySelector("div");
 console.dir(div);   
let body=document.querySelector("body");
console.dir(body);
let heading2=document.querySelector("h2");
heading2.innerText+="FROM APNA COLLEGE STUDENTS";
let div1=document.querySelectorAll(".Box");
console.dir(div1);
// div1[0].innerText="I";
// div1[1].innerText="love";
// div1[2].innerText="Javascript";
for(let i=0;i<=div1.length;i++)
{
    if(i==0)
    {
        div1[i].innerText="I";
    }
     if(i==1)
    {
        div1[i].innerText="Love";
    }
    if(i==2)
    {
        div1[i].innerText="Javascript";
    }
}
let heading1=document.querySelector("h1");
heading1.innerHTML="<h1 align=center>Web Developement</h1>";





