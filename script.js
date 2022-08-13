
marked.setOptions({
    breaks: true
})

const renderer = new marked.Renderer();

function App () {

    const [text, setText] = React.useState(`\
# This is my markup previewer
## I hope you like it
[Google](http://www.google.com)

\`var\`
\`\`\`
function sum(){
    return 2 + 4;
}
\`\`\`
- Apples
- Oranges
- Bananas
>There is no such thing as an ordinary life.

![alt text](image.jpg)

**bold text**
`);

    return (
        <div className="flex-container">

            <div>
                <div id="top-bar">
                    <div><i className="fa-solid fa-pen-to-square"></i> Editor</div>
                </div>
                <textarea
                    text="text"
                    id="editor"
                    value={text}
                    onChange={(event)=> {
                        setText(event.target.value)
                    }}
                 ></textarea>
            </div>
            <div>
                <div id="top-bar">
                    <div><i className="fa-solid fa-pen-to-square"></i> Previewer</div>
                </div>
                <Preview markdown={text}/>
            </div>
        </div>
        
    )
}

function Preview({markdown}) {
    return (
        
        <div
            dangerouslySetInnerHTML = {{
                __html: marked(markdown, {renderer: renderer})
            }}
            id="preview"
        ></div>

    )
}


ReactDOM.render(<App/>, document.getElementById('root'));
