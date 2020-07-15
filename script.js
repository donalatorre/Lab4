
$("button").on("click", function(e) {
	e.preventDefault()
	var txt = $("input[type=text]").prop('value')
	var ptxt = $("<p></p>").text(txt)
	var ckr = $("<br><button class='checar'> Checar </button>\n")
	var del = $("<button class='del'> Eliminar </button>")
	var elm = $("<div class='lis'> </div>")
	elm.append(ptxt)
	elm.append(ckr)
	elm.append(del)
	$("form").append(elm)
})

$("form").on("click", ".del", function(e) {
	e.preventDefault()
	$(this).parent().remove()
})

$("form").on("click", ".checar", function(e) {
	e.preventDefault()
	$(this).parent().toggleClass("chec")
	$(this).parent().toggleClass("itemShop")
})

