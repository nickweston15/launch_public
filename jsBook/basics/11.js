// What value does the following expression evaluate to?

/* I believe the following expression will evalute to 3.1415 as a Number, 
not as a String because the parseInt function explicitly coerces the
given string into a number data type. 

EDIT: I was wrong here, becaues parseInt behaves differently than Number.
parseInt stops if it hits a non-digit, so it will only return 3.*/
parseInt("3.1415");