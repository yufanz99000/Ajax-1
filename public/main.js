getJSON.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('GET', '/5.json');

    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status < 300) {
                console.log(request.response);
                const object = JSON.parse(request.response);
                console.log(object);
                
            }
        }
    }
    request.send();
}

getXML.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('GET', '/4.xml');

    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status < 300) {
                console.log(request.response);
                const xml = document.createElement('xml');
                xml.innerHTML = request.response;
                document.body.appendChild(xml);
                //const text = dom.getElementsByTagName('warning')[0].textContent;
                //console.log(text);   
            }
        }
    }
    request.send();
}


getCSS.onclick = () => {
    const request = new XMLHttpRequest();
    request.open("GET", "/style.css");//readystate = 1

    request.onreadystatechange = () => {
        //下载完成 但不知道是成功还是失败
        //3开始下载 
        //4下载完成
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status < 300) {
                const style = document.createElement('style');
                style.innerHTML = request.response;
                document.head.appendChild(style);
            }
            console.log(request.status);

        }
    }
    request.send(); //readystate = 2 
}

getHTML.onclick = () => {
    const request = new XMLHttpRequest();
    request.open("GET", "/3.html");

    request.onload = () => {
        console.log('success');
        console.log('request: response:');
        console.log(request.response);

        const div = document.createElement('div');
        div.innerHTML = request.response;
        document.body.appendChild(div);

        console.log(request.status);
    }
    request.onerror = () => {
        console.log('failure');
    }
    request.send();
}

getJavascript.onclick = () => {
    const request = new XMLHttpRequest();
    request.open("GET", "/2.js");

    request.onload = () => {
        console.log('success');
        console.log('request: response:');
        console.log(request.response);

        const script = document.createElement('script');
        script.innerHTML = request.response;
        document.head.appendChild(script);

    }

    request.onerror = () => {
        console.log('failure');
    }
    request.send();
}