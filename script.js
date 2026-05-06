
/* =========================
   WEBHOOK (PUT YOUR URL HERE)
========================= */
const WEBHOOK = "https://discord.com/api/webhooks/1501576085308182628/zuaR4p-qrjZc6shGRRintawI14RkMR6f1TbIRwtZPSXIMIviczfT5anEC_yvlT1W3SxY";

/* =========================
   DISCORD SENDER (CORE)
========================= */
async function sendToDiscord(content) {
  try {
    const res = await fetch(WEBHOOK, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        content: content
      })
    });

    return res.ok;
  } catch (err) {
    console.log("Webhook error:", err);
    return false;
  }
}

/* =========================
   🏠 SHOP → CHECKOUT NAV
========================= */
function goCheckout(type) {
  window.location.href = `checkout.html?type=${type}`;
}

/* =========================
   🛍️ CHECKOUT ORDER SYSTEM
========================= */
async function sendOrderFromCheckout() {

  const params = new URLSearchParams(window.location.search);
  const type = params.get("type");

  const user = document.getElementById("user")?.value;
  const pose = document.getElementById("pose")?.value;
  const color = document.getElementById("color")?.value;
  const details = document.getElementById("details")?.value;

  if (!user || !pose || !color) {
    alert("Please fill all fields");
    return;
  }

  let label = "ORDER";
  let price = "";

  if (type === "gfx") {
    label = "NEW GFX ORDER";
    price = "80R$ / 1 godly";
  }

  if (type === "banner") {
    label = "NEW BANNER ORDER";
    price = "160R$ / 2 godlies";
  }

  if (type === "thumbnail") {
    label = "NEW THUMBNAIL ORDER";
    price = "240R$ / 3 godlies";
  }

  const msg = `🛍️ ${label}
Price: ${price}
User: ${user}
Pose: ${pose}
Colour: ${color}
Details: ${details}`;

  const ok = await sendToDiscord(msg);
  alert(ok ? "Order sent!" : "Error sending order");
}

/* =========================
   🔁 CROSS TRADING SYSTEM
========================= */
async function sendTrade() {

  const giveType = document.getElementById("giveType")?.value;
  const item = document.getElementById("item")?.value;
  const wantType = document.getElementById("wantType")?.value;
  const user = document.getElementById("username")?.value;

  if (!giveType || !item || !wantType || !user) {
    alert("Please fill all fields");
    return;
  }

  const msg = `🔁 CROSS TRADE REQUEST
Username: ${user}
Trading: ${giveType}
Item: ${item}
Looking for: ${wantType}`;

  const ok = await sendToDiscord(msg);
  alert(ok ? "Trade sent!" : "Error sending trade");
}

/* =========================
   💬 LIVE CHAT / CONTACT
========================= */
async function sendChat() {

  const contact = document.getElementById("contact")?.value;
  const message = document.getElementById("chatMsg")?.value;

  if (!contact || !message) {
    alert("Enter contact + message");
    return;
  }

  const msg = `💬 LIVE MESSAGE
Contact: ${contact}
Message: ${message}`;

  const ok = await sendToDiscord(msg);
  alert(ok ? "Sent!" : "Error sending message");
}