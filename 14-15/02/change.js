function find_edit(){
    const name_node  = document.getElementById('name')
    name_node.innerHTML="Sofya"

    const name_node  = document.getElementById('abc')
    name_node.innerHTML="ABCDE"
}

const node_for_click = document.getElementById("for_click")
node_for_click.addEventListener("click",find_edit)
