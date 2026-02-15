const teams = {
    looser11: {
        name: "Looser 11",
        players: [
            "হিরন্ময়", "জিৎ", "প্রভাত", "ভোলা",
            "পবিত্র", "অঙ্কন", "রঞ্জিত", "মান্তু"
        ]
    },
    sukanta: {
        name: "SUKANTA's Team",
        players: [
            "সুদীপ", "সৌভিক", "আকাশ", "সাত্ত্বিক",
            "নিলয়", "তাপস", "রকি", "সুরজিৎ"
        ]
    },
    jayanta: {
        name: "JAYANTA's Team",
        players: [
            "অভিষেক (রাজু)", "সোমনাথ", "প্রসেনজিৎ",
            "অভিষেক (অভি)", "অর্পণ", "সুব্রত",
            "শঙ্খ", "দেবাঞ্জন", "দেবজিৎ"
        ]
    },
    rahul: {
        name: "RAHUL's Team",
        players: [
            "অরিন্দম", "কাজু", "ইন্দ্রজিৎ", "কৌশিক",
            "সৌমেন্দু", "পিন্টু", "সৌম্যজিৎ", "পলাশ"
        ]
    }
};

function showPlayers(teamKey) {
    const section = document.getElementById("playerSection");
    const t = teams[teamKey];
    let html = `<h2>${t.name}</h2>`;
    html += `<p>মোট খেলোয়াড়: ${t.players.length}</p>`;
    t.players.forEach(p => {
        html += `
            <div class="player">
                <img src="images/player.png" alt="${p}">
                <p>${p}</p>
            </div>
        `;
    });
    section.innerHTML = html;
}

