/* toc1.html in #con_list 내용 가져와서 #home_list_toc 에 넣기 */
fetch('toc1.html')
		.then(data => data.text())
		.then(html => {
			const parser = new DOMParser();
			const htmlDocument = parser.parseFromString(html, "text/html");
			const nav = htmlDocument.documentElement.querySelector("#con_list").innerHTML;
			document.querySelector('#home_list_toc').innerHTML = nav;
		})
