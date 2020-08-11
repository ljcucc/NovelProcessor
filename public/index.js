(()=>{
  let editor_input = document.querySelector("#input");
  let editor_display = document.querySelector("#display");
  let start = 0, end = 0;

  let handleSelect = ()=>{
    if(editor_input.scrollTop > 0){
      console.log(editor_input.scrollTop);

      editor_display.style.marginTop = `-${editor_input.scrollTop}px`;
    }

    if(start == editor_input.selectionStart && end == editor_input.selectionEnd)
      return ;

    let temp_start = editor_input.selectionStart, temp_end = editor_input.selectionEnd;

    start = temp_start;
    end = temp_end;

    renderContent();
  };

  let selection_cursor = ()=>`<span class="cursor"></span>`;
  let selection_start_html = ()=>`<span class="selected">`;
  let selection_end_html = ()=>`</span>`;

  let renderContent = ()=>{
    let value = editor_input.value.replace(/\ /g, "⑀");
    if(start == end)
      editor_display.innerHTML = (value.substring(0, start) + selection_cursor() + value.substring(start, value.length)).replace(/\n/g,"<br>").replace(/\⑀/g, "&nbsp;");
    else
      editor_display.innerHTML = (value.substring(0, start) + selection_start_html() + value.substring(start, end) + selection_end_html() + value.substring(end, value.length)).replace(/\n/g,"<br>").replace(/\⑀/g, "&nbsp;");

  }

  editor_input.addEventListener("scroll", handleSelect);
  editor_input.addEventListener("change", handleSelect);
  editor_input.addEventListener("mousemove", handleSelect);
  editor_input.addEventListener("mousedown", handleSelect);
  editor_input.addEventListener("mouseup", handleSelect);
  editor_input.addEventListener("keydown", handleSelect);
  editor_input.addEventListener("keyup", handleSelect);

})();
