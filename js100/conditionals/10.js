/* Determine was the following code snippet logs. First solve it in your head
or on paper, and only then run it in your JavaScript console to check the result.

Bonus question: Do we need the parentheses in the boolean expression or could
we also have written it without them? */

/* This will log "true". First inside the parentheses acceleration is > 0 and since
it uses an OR operator, everything inside the parentheses returns true, even
though speed isn't greater than 0. Now we have two operands and an AND operator.
The first operand is true because brakingForce is less than acceleration. The
second operand is true because everything inside the parentheses was true. Thus,
the expression is true because both operands of the AND operator are true and thus
isMoving returns true. 

Bonus question: Yes we need the parentheses. If you don't include them, then the
expression just gets evaluted left to right because && has a higher operator
precedenec than ||. The first part is true as we stated. But then the next 
evaluation is true && false since speed is not greater than 0. Thus, the
entire expression evalutes to false. */

let speed = 0;
let acceleration = 24;
let brakingForce = 19;

let isMoving = brakingForce < acceleration && (speed > 0 || acceleration > 0);

console.log(isMoving);