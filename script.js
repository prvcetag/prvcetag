const webhook = "https://discord.com/api/webhooks/1501576085308182628/zuaR4p-qrjZc6shGRRintawI14RkMR6f1TbIRwtZPSXIMIviczfT5anEC_yvlT1W3SxY";

/* CHAT TOGGLE */
function toggleChat() {
    document.querySelector(".chat-box").classList.toggle("active");
}

/* CHAT SEND */
function sendChat() {
    const user = document.getElementById("chatUser").value;
    const msg = document.getElementById("chatMsg").value;

    if (!user || !msg) return alert("Fill all fields!");

    fetch(webhook, {
        method: "POST",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify({
            content: `💬 LIVE CHAT\nUser: ${user}\nMessage: ${msg}`
        })
    });

    alert("Sent!");
}

/* CROSS TRADE FIXED */
function sendCross() {
    const a = document.getElementById("a").value;
    const b = document.getElementById("b").value;
    const c = document.getElementById("c").value;
    const d = document.getElementById("d").value;

    fetch(webhook, {
        method: "POST",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify({
            content: `🔁 NEW CROSS TRADE
1. ${a}
2. ${b}
3. ${c}
4. ${d}`
        })
    });

    alert("Sent!");
}