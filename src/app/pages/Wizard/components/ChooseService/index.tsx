import React from 'react';

// Array of services group by category
const groups = [
  {
    category: { name: 'Za djecu' },
    services: [
      {
        name: 'Psihološka procjena djeteta',
        category: { name: 'Za djecu' },
        description:
          'Psihološka procjena djeteta uključuje niz postupaka temeljem kojih dječji psiholog donosi zaključak je li riječ o normalnom psihološkom razvoju ili su prisutna određena odstupanja u pojedinim razvojnim područjima.',
        price: 300,
      },
      {
        name: 'Individualni terapijski rad s djetetom',
        category: { name: 'Za djecu' },
        description:
          'Psihološka procjena djeteta uključuje niz postupaka temeljem kojih dječji psiholog donosi zaključak je li riječ o normalnom psihološkom razvoju ili su prisutna određena odstupanja u pojedinim razvojnim područjima.',
        price: 300,
      },
      {
        name: 'Razvoj vještina učenja',
        category: { name: 'Za djecu' },
        description:
          'Psihološka procjena djeteta uključuje niz postupaka temeljem kojih dječji psiholog donosi zaključak je li riječ o normalnom psihološkom razvoju ili su prisutna određena odstupanja u pojedinim razvojnim područjima.',
        price: 300,
      },
    ],
  },
  {
    category: { name: 'Za odrasle' },
    services: [
      {
        name: 'Psihološko savjetovanje',
        category: { name: 'Za odrasle' },
        description:
          'Psihološka procjena djeteta uključuje niz postupaka temeljem kojih dječji psiholog donosi zaključak je li riječ o normalnom psihološkom razvoju ili su prisutna određena odstupanja u pojedinim razvojnim područjima.',
        price: 300,
      },
      {
        name: 'Psihološka procjena',
        category: { name: 'Za odrasle' },
        description:
          'Psihološka procjena djeteta uključuje niz postupaka temeljem kojih dječji psiholog donosi zaključak je li riječ o normalnom psihološkom razvoju ili su prisutna određena odstupanja u pojedinim razvojnim područjima.',
        price: 300,
      },
      {
        name: 'Obiteljska medijacija',
        category: { name: 'Za odrasle' },
        description:
          'Psihološka procjena djeteta uključuje niz postupaka temeljem kojih dječji psiholog donosi zaključak je li riječ o normalnom psihološkom razvoju ili su prisutna određena odstupanja u pojedinim razvojnim područjima.',
        price: 300,
      },
    ],
  },
];
const ChooseService = () => {
  return <div></div>;
};

export { ChooseService };
