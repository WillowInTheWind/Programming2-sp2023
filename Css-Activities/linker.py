Wants_Fonts = True

while Wants_Fonts:
	font = input("What font do you want to use? ")
	print("<link href='https://fonts.googleapis.com/css?family=" + str(font) + "'rel='stylesheet'>")
	if input("do you want another font(Y/N)? ") == "n":
		Wants_Fonts = False
