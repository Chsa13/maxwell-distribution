import React from "react";
let img = "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22229.808%22%20height%3D%2249.544%22%20viewBox%3D%220%20-1787.7%2012697%202737.2%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20aria-hidden%3D%22true%22%3E%3Cdefs%3E%3Cpath%20id%3D%22a%22%20d%3D%22M118-162q2%200%206-2t11-3%2012-1q13%200%2024%2013t16%2029q10%2027%2034%20153t46%20240%2022%20115v3h-47q-47%200-50%202-4%203-4%2010l7%2028q2%205%208%205t47%201q48%200%2048%201%200%202%209%2050t12%2058q37%20165%20146%20165%2037-2%2061-22t24-53q0-36-21-52t-42-17q-44%200-44%2042%200%2019%2011%2033t24%2021l9%205q-16%206-30%206-12%200-23-10t-15-28q-7-29-16-78t-16-83-7-36%2055-2q45%200%2052-1t11-6q1-4-2-17t-5-16q-2-5-9-5t-54-1h-56l-23-122Q301%2015%20282-47q-27-85-70-126-37-32-73-32-32%200-58%2019t-26%2054q0%2037%2021%2054t42%2017q44%200%2044-42%200-19-11-33t-24-21z%22%2F%3E%3Cpath%20id%3D%22b%22%20d%3D%22M94%20250q0%2069%2010%20131t23%20107%2037%2088%2038%2067%2042%2052%2033%2034%2025%2021h17q14%200%2014-9%200-3-17-21t-41-53-49-86-42-138-17-193%2017-192%2041-139%2049-86%2042-53%2017-21q0-9-15-9h-16l-28%2024q-94%2085-137%20212T94%20250%22%2F%3E%3Cpath%20id%3D%22c%22%20d%3D%22M173%20380q0%2025-19%2025-24%200-50-29t-43-89q-1-1-2-3t-1-3-2-2-3-1-4%200-8%200H27q-6%206-6%209%200%207%208%2029t24%2052%2044%2051%2063%2022q42%200%2065-24t24-56q0-17-3-26%200-6-15-44t-31-89-18-89q0-27%205-44%2013-43%2063-43%2037%200%2069%2034t50%2079%2029%2083%2011%2055q0%2023-8%2040t-18%2026-18%2018-8%2022q0%2022%2019%2041t41%2019q19%200%2034-18t16-58q0-27-12-83t-37-125-71-119-106-51q-64%200-102%2033-37%2032-37%2095%200%2031%208%2064t41%20117q22%2064%2022%2082%22%2F%3E%3Cpath%20id%3D%22d%22%20d%3D%22m60%20749%204%201h22l28-24q94-85%20137-212t43-264q0-68-10-131T261%2012t-37-88-38-67-41-51-32-33-23-19l-4-4H63q-3%200-5%203t-3%209q1%201%2011%2013Q221-64%20221%20250T66%20725q-10%2012-11%2013%200%208%205%2011%22%2F%3E%3Cpath%20id%3D%22e%22%20d%3D%22M56%20347q0%2013%2014%2020h637q15-8%2015-20%200-11-14-19l-318-1H72q-16%205-16%2020m0-194q0%2015%2016%2020h636q14-10%2014-20%200-13-15-20H70q-14%207-14%2020%22%2F%3E%3Cpath%20id%3D%22f%22%20d%3D%22M462%200q-18%203-129%203-116%200-134-3h-9v46h58q7%200%2017%202t14%205%207%208q1%202%201%2054v50H28v46l151%20231q153%20232%20155%20233%202%202%2021%202h18l6-6V211h92v-46h-92V66q0-7%206-12%208-7%2057-8h29V0zM293%20211v334L74%20212l109-1z%22%2F%3E%3Cpath%20id%3D%22g%22%20d%3D%22M132-11q-34%200-34%2033v11l13%2028q75%20158%20109%20273l8%2024h-32q-38%200-54-3t-39-19q-11-7-22-18t-19-21-9-12q-2-1-15-1-19%200-19%2010%200%206%2019%2035t55%2062%2071%2038q7%202%20225%202%20160%200%20164-1%2020-7%2020-28%200-31-32-42-6-2-69-2h-64l-3-17q-12-72-12-119%200-52%209-93t19-64%2010-28q0-17-14-32t-36-15q-11%200-18%203t-16%2024-16%2060q-1%209-1%2044%200%2049%209%20105t18%2092%2010%2040h-98l-1-4q0-3-19-79t-43-161-31-97q-11-28-43-28%22%2F%3E%3Cpath%20id%3D%22h%22%20d%3D%22M701-940q0-3-6-9h-31q-2%202-28%2027t-45%2043-54%2061-62%2081-63%20101-62%20125-55%20149-45%20176-29%20203-12%20234q0%20711%20364%201110%2023%2025%2043%2044t33%2032%2015%2013h31q6-6%206-9%200-5-20-26t-52-59-72-95-81-143-76-191-60-252-32-316q-2-38-2-109%200-389%2094-680t290-494q11-12%2011-16%22%2F%3E%3Cpath%20id%3D%22i%22%20d%3D%22M289%20629q0%206-57%208-24%200-31%201t-7%2010q0%201%202%2011%201%203%202%207t1%205%202%205%202%203%204%202%205%202%208%200%2012%201h30q24%200%2045-1h91q12%200%2016-5%201-4%2037-282l36-279%2023%2037q24%2036%2064%20100t88%20140q175%20279%20177%20281l3%203q2%202%204%203l6%202h136q23%200%2029%201%2034%200%2034-11%200-5-3-17t-3-13q-4-6-37-6-40-1-51-3t-18-11q-3-5-72-283T797%2059q0-4%201-5t7-4%2017-2%2033-2h31q6-9%206-11%200-16-7-30-5-5-16-5-5%200-41%201t-92%201h-92q-31%200-35-1-17%200-17%2010%200%202%202%2014%204%2016%208%2018t23%203q27%200%2060%203%2014%203%2019%2012%202%204%2038%20146t71%20283%2035%20141L654%20322Q458%2010%20453%205l-4-2q-5-3-16-3-15%200-18%207-2%204-41%20310l-39%20307-68-270Q200%2088%20200%2079q6-33%2072-33h10q6-5%207-9t-3-18q-4-16-8-18-4-1-11-1h-12q-10%200-34%201t-64%201q-30%200-62-1T58%200Q43%200%2039%202t-4%209q0%202%203%2014t5%2015q2%206%2022%206%2070%200%2089%2040%204%206%2069%20268t66%20275%22%2F%3E%3Cpath%20id%3D%22j%22%20d%3D%22M109%20429q-27%200-43%2018t-16%2044q0%2071%2053%20123t132%2052q91%200%20152-56t62-145q0-43-20-82t-48-68-80-74q-36-31-100-92l-59-56%2076-1q157%200%20167%205%207%202%2024%2089v3h40v-3q-1-3-13-91T421%203V0H50v31q0%207%206%2015t30%2035q29%2032%2050%2056%209%2010%2034%2037t34%2037%2029%2033%2028%2034%2023%2030%2021%2032%2015%2029%2013%2032%207%2030%203%2033q0%2063-34%20109t-97%2046q-33%200-58-17t-35-33-10-19q0-1%205-1%2018%200%2037-14t19-46q0-25-16-42t-45-18%22%2F%3E%3Cpath%20id%3D%22k%22%20d%3D%22M230%20637q-27%200-32%201t-5%2011q0%2027%2011%2033%202%201%20174%201%20172-1%20186-3%2056-8%2094-28t54-46%2021-43%206-34q0-45-29-84t-67-60-67-34-38-13l7-5q67-38%2067-110%200-11-5-61t-5-82v-9q0-18%201-28t11-18%2026-9q28%200%2046%2022t26%2047q5%2014%208%2017t15%203q20%200%2020-12%200-18-24-57-38-57-90-57h-9q-61%200-101%2025t-44%2078q0%2027%2015%2084t15%2073q0%2051-43%2074-15%207-25%208t-71%202h-69l-32-130Q244%2061%20244%2059q0-4%201-5t7-4%2017-2%2033-2h31q6-8%206-9t-3-18q-4-13-10-19h-15q-36%202-131%202H71Q54%202%2050%201q-17%200-17%209%200%202%203%2014%205%2019%2010%2021%204%201%2015%201h6q27%200%2060%203%2014%203%2019%2012%203%204%2072%20278t69%20289q0%207-57%209m400-83q0%2032-21%2054t-86%2028h-23q-21%200-38%201h-22q-47%200-54-10-1-3-34-133t-33-133q0-1%2069-1%2078%201%20104%207%2064%2010%20100%2059%2016%2023%2027%2060t11%2068%22%2F%3E%3Cpath%20id%3D%22l%22%20d%3D%22M40%20437q-19%200-19%208%200%205%2016%2056t34%20101l17%2049q5%2018%2013%2026h558q32%200%2038-1t7-9q0-6-17-114t-19-109q0-7-19-7h-12q-3%200-6%205l-2%203q0%206%206%2045t6%2061q0%2035-13%2053t-55%2025q-5%201-58%202-46%200-58-1t-18-8q-1-1-71-279T298%2060q0-12%2088-14%2032%200%2041-1t9-9q0-5-3-14-4-18-9-21l-2-1h-7q-5%200-52%201T228%202Q99%202%2064%200H49q-6%206-6%209t2%2018q4%2013%2010%2019h39q80%200%2095%209%201%201%202%201%205%203%2010%2020t40%20157q17%2068%2028%20111%2070%20275%2070%20281%200%205-29%205h-31q-67%200-88-6-45-10-70-41T67%20467q-7-22-10-26t-14-4z%22%2F%3E%3Cpath%20id%3D%22m%22%20d%3D%22M34%201438q0%208%203%2010t13%202h21q2-2%2028-27t45-43%2054-61%2062-81%2063-101%2062-124%2055-149%2045-176%2029-203%2012-234q0-117-7-198-47-572-357-913-23-25-43-44t-33-32-15-13H56q-13%200-17%202t-5%2010q54%2054%20106%20124Q428-430%20428%20251q0%20202-26%20377t-64%20294-93%20224-100%20163-99%20116l-4%204q-2%202-3%204t-3%203z%22%2F%3E%3Cpath%20id%3D%22n%22%20d%3D%22M127%20463q-27%200-42%2017t-16%2044q0%2055%2048%2098t116%2043q35%200%2044-1%2074-12%20113-53t40-89q0-52-34-101t-94-71l-3-2q0-1%209-3t29-9%2038-21q82-53%2082-140%200-79-62-138T238-22q-80%200-138%2043T42%20130q0%2028%2018%2045t45%2018q28%200%2046-18t18-45q0-11-3-20t-7-16-11-12-12-8-10-4-8-3l-4-1q51-45%20124-45%2055%200%2083%2053%2017%2033%2017%20101v20q0%2095-64%20127-15%206-61%207l-42%201-3%202q-2%203-2%2016%200%2018%208%2018%2028%200%2058%205%2034%205%2062%2042t28%20112v8q0%2057-35%2079-22%2014-47%2014-32%200-59-11t-38-23-11-12h3q3-1%208-2t10-5%2012-7%2010-11%208-15%203-20q0-22-14-39t-45-18%22%2F%3E%3Cpath%20id%3D%22o%22%20d%3D%22M39%20168q0%2057%2019%20104t49%2078%2067%2052%2070%2031%2063%209h3q45%200%2078-22t33-65q0-90-111-118-49-13-134-14-37%200-38-2%200-2-6-35t-7-58q0-47%2021-74t63-28%2093%2019%2092%2066q9%2010%2012%2010%204%200%2013-9t10-14-9-16-30-27-46-31-63-25-76-10q-79%200-122%2053T39%20168m334%20185q-6%2052-68%2052-33%200-61-14t-45-34-29-41-16-36-5-19q0-1%2020-1%20113%200%20158%2024t46%2069%22%2F%3E%3Cpath%20id%3D%22p%22%20d%3D%22M84%20237v13l14%2020h581q15-8%2015-20t-15-20H98q-14%207-14%2020Z%22%2F%3E%3C%2Fdefs%3E%3Cg%20data-mml-node%3D%22math%22%20stroke%3D%22%23000%22%20stroke-width%3D%220%22%3E%3Cuse%20data-c%3D%221D453%22%20xlink%3Ahref%3D%22%23a%22%20data-mml-node%3D%22mi%22%20transform%3D%22scale(1%20-1)%22%2F%3E%3Cuse%20data-c%3D%2228%22%20xlink%3Ahref%3D%22%23b%22%20data-mml-node%3D%22mo%22%20transform%3D%22matrix(1%200%200%20-1%20550%200)%22%2F%3E%3Cuse%20data-c%3D%221D463%22%20xlink%3Ahref%3D%22%23c%22%20data-mml-node%3D%22mi%22%20transform%3D%22matrix(1%200%200%20-1%20939%200)%22%2F%3E%3Cuse%20data-c%3D%2229%22%20xlink%3Ahref%3D%22%23d%22%20data-mml-node%3D%22mo%22%20transform%3D%22matrix(1%200%200%20-1%201424%200)%22%2F%3E%3Cuse%20data-c%3D%223D%22%20xlink%3Ahref%3D%22%23e%22%20data-mml-node%3D%22mo%22%20transform%3D%22matrix(1%200%200%20-1%202090.8%200)%22%2F%3E%3Cuse%20data-c%3D%2234%22%20xlink%3Ahref%3D%22%23f%22%20data-mml-node%3D%22mn%22%20transform%3D%22matrix(1%200%200%20-1%203146.6%200)%22%2F%3E%3Cuse%20data-c%3D%221D70B%22%20xlink%3Ahref%3D%22%23g%22%20data-mml-node%3D%22mi%22%20transform%3D%22matrix(1%200%200%20-1%203646.6%200)%22%2F%3E%3Cg%20data-mml-node%3D%22msup%22%3E%3Cg%20data-mml-node%3D%22mrow%22%3E%3Cuse%20data-c%3D%2228%22%20xlink%3Ahref%3D%22%23h%22%20data-mml-node%3D%22mo%22%20transform%3D%22matrix(1%200%200%20-1%204216.6%20.5)%22%2F%3E%3Cg%20data-mml-node%3D%22mfrac%22%20transform%3D%22matrix(1%200%200%20-1%204952.6%200)%22%3E%3Cuse%20data-c%3D%221D440%22%20xlink%3Ahref%3D%22%23i%22%20data-mml-node%3D%22mi%22%20transform%3D%22translate(961%20676)%22%2F%3E%3Cg%20data-mml-node%3D%22mrow%22%3E%3Cuse%20data-c%3D%2232%22%20xlink%3Ahref%3D%22%23j%22%20data-mml-node%3D%22mn%22%20transform%3D%22translate(220%20-686)%22%2F%3E%3Cuse%20data-c%3D%221D70B%22%20xlink%3Ahref%3D%22%23g%22%20data-mml-node%3D%22mi%22%20transform%3D%22translate(720%20-686)%22%2F%3E%3Cuse%20data-c%3D%221D445%22%20xlink%3Ahref%3D%22%23k%22%20data-mml-node%3D%22mi%22%20transform%3D%22translate(1290%20-686)%22%2F%3E%3Cuse%20data-c%3D%221D447%22%20xlink%3Ahref%3D%22%23l%22%20data-mml-node%3D%22mi%22%20transform%3D%22translate(2049%20-686)%22%2F%3E%3C%2Fg%3E%3Cpath%20d%3D%22M120%20220h2733v60H120z%22%20stroke%3D%22none%22%2F%3E%3C%2Fg%3E%3Cuse%20data-c%3D%2229%22%20xlink%3Ahref%3D%22%23m%22%20data-mml-node%3D%22mo%22%20transform%3D%22matrix(1%200%200%20-1%207925.6%20.5)%22%2F%3E%3C%2Fg%3E%3Cg%20data-mml-node%3D%22TeXAtom%22%20data-mjx-texclass%3D%22ORD%22%3E%3Cg%20data-mml-node%3D%22mfrac%22%20transform%3D%22matrix(.707%200%200%20-.707%208694.6%20-1176.6)%22%3E%3Cuse%20data-c%3D%2233%22%20xlink%3Ahref%3D%22%23n%22%20data-mml-node%3D%22mn%22%20transform%3D%22translate(220%20394)scale(.707)%22%2F%3E%3Cuse%20data-c%3D%2232%22%20xlink%3Ahref%3D%22%23j%22%20data-mml-node%3D%22mn%22%20transform%3D%22translate(220%20-345)scale(.707)%22%2F%3E%3Cpath%20d%3D%22M120%20220h553.6v60H120z%22%20stroke%3D%22none%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fg%3E%3Cg%20data-mml-node%3D%22msup%22%3E%3Cuse%20data-c%3D%221D463%22%20xlink%3Ahref%3D%22%23c%22%20data-mml-node%3D%22mi%22%20transform%3D%22matrix(1%200%200%20-1%209305.7%200)%22%2F%3E%3Cuse%20data-c%3D%2232%22%20xlink%3Ahref%3D%22%23j%22%20data-mml-node%3D%22mn%22%20transform%3D%22matrix(.707%200%200%20-.707%209823.7%20-413)%22%2F%3E%3C%2Fg%3E%3Cg%20data-mml-node%3D%22msup%22%3E%3Cuse%20data-c%3D%221D452%22%20xlink%3Ahref%3D%22%23o%22%20data-mml-node%3D%22mi%22%20transform%3D%22matrix(1%200%200%20-1%2010227.2%200)%22%2F%3E%3Cg%20data-mml-node%3D%22TeXAtom%22%20data-mjx-texclass%3D%22ORD%22%3E%3Cuse%20data-c%3D%222212%22%20xlink%3Ahref%3D%22%23p%22%20data-mml-node%3D%22mo%22%20transform%3D%22matrix(.707%200%200%20-.707%2010726.2%20-413)%22%2F%3E%3Cg%20data-mml-node%3D%22mfrac%22%3E%3Cg%20data-mml-node%3D%22mrow%22%20transform%3D%22matrix(.707%200%200%20-.707%2011276.246%20-413)%22%3E%3Cuse%20data-c%3D%221D440%22%20xlink%3Ahref%3D%22%23i%22%20data-mml-node%3D%22mi%22%20transform%3D%22translate(220%20394)scale(.707)%22%2F%3E%3Cg%20data-mml-node%3D%22msup%22%3E%3Cuse%20data-c%3D%221D463%22%20xlink%3Ahref%3D%22%23c%22%20data-mml-node%3D%22mi%22%20transform%3D%22translate(963.057%20394)scale(.707)%22%2F%3E%3Cuse%20data-c%3D%2232%22%20xlink%3Ahref%3D%22%23j%22%20data-mml-node%3D%22mn%22%20transform%3D%22translate(1329.283%20650.641)scale(.707)%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3Cg%20data-mml-node%3D%22mrow%22%20transform%3D%22matrix(.707%200%200%20-.707%2011276.246%20-413)%22%3E%3Cuse%20data-c%3D%2232%22%20xlink%3Ahref%3D%22%23j%22%20data-mml-node%3D%22mn%22%20transform%3D%22translate(275.2%20-345)scale(.707)%22%2F%3E%3Cuse%20data-c%3D%221D445%22%20xlink%3Ahref%3D%22%23k%22%20data-mml-node%3D%22mi%22%20transform%3D%22translate(628.7%20-345)scale(.707)%22%2F%3E%3Cuse%20data-c%3D%221D447%22%20xlink%3Ahref%3D%22%23l%22%20data-mml-node%3D%22mi%22%20transform%3D%22translate(1165.313%20-345)scale(.707)%22%2F%3E%3C%2Fg%3E%3Cpath%20d%3D%22M11361.086-568.54h1200.769v-42.42h-1200.769z%22%20stroke%3D%22none%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
export default function Title(){
  return (
    <div id={"title"} style={{display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "rgb(96 203 214)"}}>
      <h2 style={{paddingRight: "30px", paddingLeft: "10px"}}>Распределение Максвелла</h2>
      <img src={img} style={{height: "50px"}}/>
    </div>
  )
}