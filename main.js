const teams = {
  looser11: {
    name: "Looser 11",
    players: [
      { name: "হিরন্ময়", img: "images/looser11/hiranmoy.jpg" },
      { name: "জিৎ", img: "images/looser11/jit.jpg" },
      { name: "প্রভাত", img: "images/looser11/prabhat.jpg" },
      { name: "ভোলা", img: "images/looser11/bhola.jpg" },
      { name: "পবিত্র", img: "images/looser11/pabitra.jpg" },
      { name: "অঙ্কন", img: "images/looser11/ankan.jpg" },
      { name: "রঞ্জিত", img: "images/looser11/ranjit.jpg" },
      { name: "মান্তু", img: "images/looser11/mantu.jpg" }
    ]
  },

  sukanta: {
    name: "SUKANTA's Team",
    players: [
      { name: "সুদীপ", img: "images/sukanta/sudip.jpg" },
      { name: "সৌভিক", img: "images/sukanta/souvik.jpg" },
      { name: "আকাশ", img: "images/sukanta/akash.jpg" },
      { name: "সাত্ত্বিক", img: "images/sukanta/sattwik.jpg" },
      { name: "নিলয়", img: "images/sukanta/niloy.jpg" },
      { name: "তাপস", img: "images/sukanta/tapas.jpg" },
      { name: "রকি", img: "images/sukanta/rocky.jpg" },
      { name: "সুরজিৎ", img: "images/sukanta/surjit.jpg" }
    ]
  },

  jayanta: {
    name: "JAYANTA's Team",
    players: [
      { name: "অভিষেক (রাজু)", img: "images/jayanta/abhishek_raju.jpg" },
      { name: "সোমনাথ", img: "images/jayanta/somnath.jpg" },
      { name: "প্রসেনজিৎ", img: "images/jayanta/prosenjit.jpg" },
      { name: "অভিষেক (অভি)", img: "images/jayanta/abhishek_abhi.jpg" },
      { name: "অর্পণ", img: "images/jayanta/arpan.jpg" },
      { name: "সুব্রত", img: "images/jayanta/subrata.jpg" },
      { name: "শঙ্খ", img: "images/jayanta/shankha.jpg" },
      { name: "দেবাঞ্জন", img: "images/jayanta/debanjan.jpg" },
      { name: "দেবজিৎ", img: "images/jayanta/debajit.jpg" }
    ]
  },

  rahul: {
    name: "RAHUL's Team",
    players: [
      { name: "অরিন্দম", img: "images/rahul/arindam.jpg" },
      { name: "কাজু", img: "images/rahul/kaju.jpg" },
      { name: "ইন্দ্রজিৎ", img: "images/rahul/indrajit.jpg" },
      { name: "কৌশিক", img: "images/rahul/kaushik.jpg" },
      { name: "সৌমেন্দু", img: "images/rahul/soumendu.jpg" },
      { name: "পিন্টু", img: "images/rahul/pintu.jpg" },
      { name: "সৌম্যজিৎ", img: "images/rahul/soumyajit.jpg" },
      { name: "পলাশ", img: "images/rahul/palash.jpg" }
    ]
  }
};

function showPlayers(teamKey) {
  const section = document.getElementById("playerSection");
  const team = teams[teamKey];

  let html = `<h2>${team.name}</h2>`;
  html += `<p>মোট খেলোয়াড়: ${team.players.length}</p>`;
  html += `<div class="players">`;

  team.players.forEach(p => {
    html += `
      <div class="player">
        <img src="${p.img}" alt="${p.name}">
        <p>${p.name}</p>
      </div>
    `;
  });

  html += `</div>`;
  section.innerHTML = html;
}
