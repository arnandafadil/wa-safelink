
document.addEventListener("DOMContentLoaded", function () {
  const mapping = {
  "0GpyYi41EwrH6hWkNNcG1L": "qJnAw7uEF",
  "JlUrRDTgfqbJ2lP7eTXUy1": "ruZQiH7BP",
  "IsTlxFfqOTsI3H8Mccgge7": "7CMp3RHff",
  "CQXNz26xIxo3nDJfjc1Oce": "NLfZDRcfs",
  "F9q86Vd2bnkGoMrkx611ts": "WcnXyo3j3",
  "FYiPDhMs8ZpEcDrgn5a3un": "eVJOKV6XM",
  "H5Bax7tFTjnFcawwD76eKI": "5Jt21GJf7",
  "7D3ECgGwVlyGUobzq2Z4rF": "Tcw2UN5cG",
  "D9LQvk0dEbb5lNAK8oB0Y3": "AbcZuIj9Q",
  "AV28jtMpjHqCxgmuhKhdL3": "xlPof5re8",
  "L4EkNRN4I590ECQaSoGiAb": "o629DrBwd",
  "Bi2koo4oG0eF3mlYlWZul8": "tNPkNx5A2",
  "Hn3riJ9rfyZ6WdjiFXuJZw": "GyEsLOyFr",
  "BgTvC2V0oVi4tXXvxmLoeU": "n2ditPQqO",
  "FM4qTg9duLsFZ4zXlZdnPR": "8oE1dofwv",
  "LTp2I9yMlJOFb3bNuYWMWt": "e7gEeTiBR",
  "Bulutangkis": "dA3efi3qH",
  "Cq89sCFBIpSGAm6YlClQvm": "bQoBqeXki",
  "Hvbg1IScT1c4Ms16SSf3JN": "DH73Xtsmy",
  "Cem8mWsa5dz0fcC7puU3wb": "CXuqd5Ncx",
  "BWiSjHDF12e5eIw26YHm4m": "y1DBNts41",
  "EhkCkXZQUbqFW2dS2q2RVz": "a8eYOFyTm",
  "02Fboq2ScLR0mm29rAFqxd": "CKxWh4lSD",
  "Ce0WyU657G3LwnJNyirErW": "nKdQKXWBD",
  "1DDcf051JzCFRuZYsNWG2W": "6c9mkiMEa",
  "8XXnPc451xnJTbu9poWmsE": "KUD05QGvg",
  "DHc0UXQk3wU2ZNVlFeoecj": "DwkBzO294",
  "C59MqfdQhdo7QC9xPen3l2": "9TJNaWgUi",
  "BCttaybZDsd5tO8XbJTGNn": "pKtvyozUZ",
  "IPaAEJmVdWk2SB4iFwWzso": "eHHdTDJ37",
  "CcvjO098pCk5okwGFNyBRU": "KvDZplG5m",
  "HmvE9D03IaQ4VX3rzKSt3s": "bM49uihlR",
  "LQ0QxPjHHMSHRHSPrzNlOs": "SAA6ScypX",
  "BTlwvCLQYsF3oTR6fXwEJp": "0JpXSAP1e",
  "BreRu9WFMcM7bUmpt0354D": "c2wyW08oL",
  "4naD00TVa2jKOHleZBGJ3O": "UOATYqfMz",
  "CZmNiBM2nSQCihX98BPKCn": "7KBYNOnv1",
  "EXfLEyTiIy99RIuDBhGjCk": "lwxXcFEnf",
  "GcqTljyztIFKQApQ78EGUe": "L3UJp2mWh"
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
