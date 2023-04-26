// What value does the following expression evaluate to?

/* I believe it will evaluate to undefined because since the numbers are
within "", it's essential comparing two truthy values and asking the
computer is true less than true isn't a valid question.

EDIT: Well I was very wrong here. JavaScript performs a
character-by-character comparison when you compare two strings. Thus, it
first looks at "1" < "9", which is thinks it true. So, it thinks that
in totality "12" is less than "9". */
"12" < "9"