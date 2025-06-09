
document.addEventListener("DOMContentLoaded", function() {
  const mapping = {
  "0GpyYi41EwrH6hWkNNcG1L": "xUMyZcJtwpd",
  "JlUrRDTgfqbJ2lP7eTXUy1": "8TqqKiaRu9N",
  "IsTlxFfqOTsI3H8Mccgge7": "eLVuyPAn3fh",
  "CQXNz26xIxo3nDJfjc1Oce": "5NYANOUXuuo",
  "F9q86Vd2bnkGoMrkx611ts": "bxc9peOydkx",
  "FYiPDhMs8ZpEcDrgn5a3un": "zpAvNab5Qu7",
  "H5Bax7tFTjnFcawwD76eKI": "OmUQ5S3k49V",
  "7D3ECgGwVlyGUobzq2Z4rF": "j7G2BBHgrjK",
  "D9LQvk0dEbb5lNAK8oB0Y3": "x4kkLHo0vGx",
  "AV28jtMpjHqCxgmuhKhdL3": "KhGKmqjwQ1x",
  "L4EkNRN4I590ECQaSoGiAb": "JblIGgMJ1W5",
  "Bi2koo4oG0eF3mlYlWZul8": "Xftmu6ULtQa",
  "Hn3riJ9rfyZ6WdjiFXuJZw": "EpErfutbPca",
  "BgTvC2V0oVi4tXXvxmLoeU": "lS6so9Xmfdj",
  "FM4qTg9duLsFZ4zXlZdnPR": "5FbyEVQGbtK",
  "LTp2I9yMlJOFb3bNuYWMWt": "lB8MvDyDVhU",
  "Cq89sCFBIpSGAm6YlClQvm": "unZXtIUBHz9",
  "Hvbg1IScT1c4Ms16SSf3JN": "9yZCRbMY3xn",
  "Cem8mWsa5dz0fcC7puU3wb": "C4s60hG97uA",
  "BWiSjHDF12e5eIw26YHm4m": "Sfgm0L7ZCyu",
  "EhkCkXZQUbqFW2dS2q2RVz": "FBISQB6B6Qs",
  "02Fboq2ScLR0mm29rAFqxd": "4FsfbpCLcSM",
  "Ce0WyU657G3LwnJNyirErW": "uoij8BAP5iP",
  "1DDcf051JzCFRuZYsNWG2W": "iKdpNmnoG0i",
  "8XXnPc451xnJTbu9poWmsE": "zmWtjwPcmCW",
  "DHc0UXQk3wU2ZNVlFeoecj": "wV0RbsSqVBo",
  "C59MqfdQhdo7QC9xPen3l2": "Y3bAi8pG4A9",
  "BCttaybZDsd5tO8XbJTGNn": "MQ0Hs71erya",
  "IPaAEJmVdWk2SB4iFwWzso": "yKHkRWkncTQ",
  "CcvjO098pCk5okwGFNyBRU": "QJex8cxv4U0",
  "HmvE9D03IaQ4VX3rzKSt3s": "pPL18dMPUxz",
  "LQ0QxPjHHMSHRHSPrzNlOs": "8mu1THk9vaG",
  "BTlwvCLQYsF3oTR6fXwEJp": "r3fYGpC4EcI",
  "BreRu9WFMcM7bUmpt0354D": "ga8zdq4UH7j",
  "4naD00TVa2jKOHleZBGJ3O": "z2hVY4KX1kG",
  "CZmNiBM2nSQCihX98BPKCn": "trky0SAQOb9",
  "EXfLEyTiIy99RIuDBhGjCk": "gso9oWEPIA3",
  "GcqTljyztIFKQApQ78EGUe": "pw1GbxFpTtx"
};
  const links = document.querySelectorAll("a[href*='chat.whatsapp.com/']");
  links.forEach(link => {
    const match = link.href.match(/chat\.whatsapp\.com\/([A-Za-z0-9_-]+)/);
    if (match) {
      const code = match[1];
      const newID = mapping[code];
      if (newID) {
        link.href = 'https://afadilm.blogspot.com/p/go.html?id=' + newID;
      }
    }
  });
});
