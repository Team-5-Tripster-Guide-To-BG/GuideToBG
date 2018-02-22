$(".selector").tabs({
    event: "mouseover"
});

// Getter
var event = $(".selector").tabs("option", "event");

// Setter
$(".selector").tabs("option", "event", "mouseover");