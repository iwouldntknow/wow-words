document.addEventListener("DOMContentLoaded",(async function(){const t=(t,e)=>{const n=document.getElementById(t);n.addEventListener("input",(()=>{n.classList.toggle("is-invalid",!e.test(n.value))}))};t("letters",/^[a-zA-ZĄąČčĘęĖėĮįŠšŲųŪūŽž]+$/),t("length1",/^\d*$/),t("length2",/^\d*$/),t("length3",/^\d*$/);const e=document.querySelector("form"),n=document.getElementById("btn-find"),l=document.getElementById("letters"),a=["length1","length2","length3"].map((t=>document.getElementById(t))),r=document.getElementById("result");n.addEventListener("click",(async()=>{if(console.log("aaa"),[l,...a].some((t=>t.classList.contains("is-invalid"))))return;try{r.firstChild&&r.removeChild(r.firstChild)}catch(t){}const t=t=>""===t.value?t.placeholder:t.value,e=await(async()=>{try{const t=await fetch("words.txt");if(!t.ok)throw new Error(`Failed to fetch file: ${t.status} ${t.statusText}`);return(await t.text()).split(/\r?\n/).filter((t=>""!==t.trim()))}catch(t){return console.error("Error:",t.message),[]}})(),n=(s=t(l),e.filter((t=>t.length<=s.length&&((t,e)=>{const n=new Set(t);return Array.from(n).every((n=>(t.match(new RegExp(n,"g"))||[]).length<=(e.match(new RegExp(n,"g"))||[]).length))})(t,s))));var s;const d=a.map((e=>{const l=t(e);return""!==l&&0!==parseInt(l,10)?n.filter((t=>t.length===parseInt(l,10))):[]})),c=Math.max(...d.map((t=>t.length))),o=document.createElement("table");o.classList.add("table","table-striped");const i=document.createElement("tbody");for(let t=0;t<c;t++){const e=document.createElement("tr");e.classList.add("row"),d.forEach(((n,l)=>{const a=document.createElement("td");a.classList.add("text-center","col"),a.textContent=n[t]||"",e.appendChild(a)})),i.appendChild(e)}o.appendChild(i),r.appendChild(o),r.children.length>=2&&r.removeChild(r.lastChild)})),e.addEventListener("submit",(async t=>{t.preventDefault()}))}));