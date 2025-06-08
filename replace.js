
document.addEventListener("DOMContentLoaded", function () {
  const mapping = {
  "0GpyYi41EwrH6hWkNNcG1L": "OvrscEYUS",
  "JlUrRDTgfqbJ2lP7eTXUy1": "GcCNWc9TX",
  "IsTlxFfqOTsI3H8Mccgge7": "5bk2TIpDC",
  "CQXNz26xIxo3nDJfjc1Oce": "2bL0JT38a",
  "F9q86Vd2bnkGoMrkx611ts": "P8CpE7hmF",
  "FYiPDhMs8ZpEcDrgn5a3un": "0zzljZfOm",
  "H5Bax7tFTjnFcawwD76eKI": "fwZHaSgI5",
  "7D3ECgGwVlyGUobzq2Z4rF": "3nP7FBPlJ",
  "D9LQvk0dEbb5lNAK8oB0Y3": "SL6ZddV0R",
  "AV28jtMpjHqCxgmuhKhdL3": "43vcw717E",
  "L4EkNRN4I590ECQaSoGiAb": "KkAcdWJje",
  "Bi2koo4oG0eF3mlYlWZul8": "MyinNzQ4z",
  "Hn3riJ9rfyZ6WdjiFXuJZw": "AsJxEgshJ",
  "BgTvC2V0oVi4tXXvxmLoeU": "Q7X7HovvB",
  "FM4qTg9duLsFZ4zXlZdnPR": "lBQ4HcZGd",
  "LTp2I9yMlJOFb3bNuYWMWt": "7fZFgpi6W",
  "# Bulutangkis": "UMdXekGxz",
  "Cq89sCFBIpSGAm6YlClQvm": "CPtla7RAq",
  "Hvbg1IScT1c4Ms16SSf3JN": "G9TwbMNS7",
  "Cem8mWsa5dz0fcC7puU3wb": "mU61eUuL7",
  "BWiSjHDF12e5eIw26YHm4m": "XEzcaNNKq",
  "EhkCkXZQUbqFW2dS2q2RVz": "GiJzHPtfG",
  "02Fboq2ScLR0mm29rAFqxd": "6BD8XA6Ho",
  "Ce0WyU657G3LwnJNyirErW": "LnEnbUBcy",
  "1DDcf051JzCFRuZYsNWG2W": "s2TYMo8dE",
  "8XXnPc451xnJTbu9poWmsE": "WUBrrU0QU",
  "DHc0UXQk3wU2ZNVlFeoecj": "N4exZloVX",
  "C59MqfdQhdo7QC9xPen3l2": "N9vpQ0L7h",
  "BCttaybZDsd5tO8XbJTGNn": "3XZtcfFID",
  "IPaAEJmVdWk2SB4iFwWzso": "hjmxIQedK",
  "CcvjO098pCk5okwGFNyBRU": "v8u10Dyv0",
  "HmvE9D03IaQ4VX3rzKSt3s": "l79jVcRMz",
  "LQ0QxPjHHMSHRHSPrzNlOs": "eEpKXBkWf",
  "BTlwvCLQYsF3oTR6fXwEJp": "30gTsVPzT",
  "BreRu9WFMcM7bUmpt0354D": "ygiJW71hZ",
  "4naD00TVa2jKOHleZBGJ3O": "jCSjDGIal",
  "CZmNiBM2nSQCihX98BPKCn": "fhhrtNKh0",
  "EXfLEyTiIy99RIuDBhGjCk": "9ul018jMG",
  "GcqTljyztIFKQApQ78EGUe": "HrcHRcXZm"
};
  const links = document.querySelectorAll("a[href*='chat.whatsapp.com/']");
  links.forEach(link => {
    const match = link.href.match(/chat\.whatsapp\.com\/([A-Za-z0-9]+)/);
    if (match) {
      const code = match[1];
      const newID = mapping[code];
      if (newID) {
        link.href = 'https://afadilm.blogspot.com/p/go.html?id=' + newID;
      }
    }
  });
});
