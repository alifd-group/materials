export interface DataItem {
  id: string;
  email: string;
  gender: string;
  name: string;
  address: string;
  phone: string;
  picture: string;
  children?: DataItem[];
}

const data: DataItem[] = [
  {
    email: 'serenity.jackson@example.com',
    gender: 'female',
    name: 'Jackson',
    address: 'Albany',
    id: '2caba51e-caba-43e0-a610-a2a075024dd2',
    phone: '05-9214-2654',
    picture: 'https://randomuser.me/api/portraits/med/women/48.jpg',
    children: [
      {
        email: 'lillie.thompson@example.com',
        gender: 'female',
        name: 'Thompson',
        address: 'West Jordan',
        id: 'dca30cd4-420b-4cfb-85e7-dcc35e767f58',
        phone: '(365)-199-9969',
        picture: 'https://randomuser.me/api/portraits/med/women/22.jpg',
        children: [
          {
            email: 'raquel.morales@example.com',
            gender: 'female',
            name: 'Morales',
            address: 'Pamplona',
            id: 'bc213b89-8072-4d12-bb09-d9501afb0abb',
            phone: '998-421-469',
            picture: 'https://randomuser.me/api/portraits/med/women/51.jpg',
            children: [],
          },
          {
            email: 'nalan.basoglu@example.com',
            gender: 'female',
            name: 'Başoğlu',
            address: 'Bilecik',
            id: '0c0c196c-1676-4200-8959-b3969861980c',
            phone: '(307)-273-0752',
            picture: 'https://randomuser.me/api/portraits/med/women/28.jpg',
            children: [],
          },
          {
            email: 'caleb.king@example.com',
            gender: 'male',
            name: 'King',
            address: 'Wellington',
            id: '97cb2342-46ed-452c-8a13-21336591a961',
            phone: '(251)-474-1600',
            picture: 'https://randomuser.me/api/portraits/med/men/23.jpg',
            children: [],
          },
        ],
      },
      {
        email: 'samuel.smith@example.com',
        gender: 'male',
        name: 'Smith',
        address: 'Sidney',
        id: '2af37d1d-bb0e-472d-af24-5485d97bd61a',
        phone: '127-420-7808',
        picture: 'https://randomuser.me/api/portraits/med/men/3.jpg',
        children: [],
      },
      {
        email: 'nicole.wallace@example.com',
        gender: 'female',
        name: 'Wallace',
        address: 'Coventry',
        id: '0b35201b-ec6c-499e-8dc5-f4eb4ccd4313',
        phone: '015396 70621',
        picture: 'https://randomuser.me/api/portraits/med/women/48.jpg',
        children: [
          {
            email: 'sara.pedersen@example.com',
            gender: 'female',
            name: 'Pedersen',
            address: 'København V',
            id: '8cb4969c-adcf-4d12-9ba4-805e2cf288a3',
            phone: '01609831',
            picture: 'https://randomuser.me/api/portraits/med/women/8.jpg',
            children: [],
          },
          {
            email: 'mary.hoffman@example.com',
            gender: 'female',
            name: 'Hoffman',
            address: 'Mildura',
            id: 'ea5a60f6-4317-4451-8510-0d394a261998',
            phone: '01-6960-1665',
            picture: 'https://randomuser.me/api/portraits/med/women/37.jpg',
            children: [],
          },
          {
            email: 'jesse.luoma@example.com',
            gender: 'male',
            name: 'Luoma',
            address: 'Kokkola',
            id: '7f1db85f-9a64-4ac7-8693-08a8e170bcc5',
            phone: '03-305-122',
            picture: 'https://randomuser.me/api/portraits/med/men/37.jpg',
            children: [],
          },
        ],
      },
    ],
  },
  {
    email: 'anthony.ford@example.com',
    gender: 'male',
    name: 'Ford',
    address: 'Albany',
    id: 'e5bc71a2-92e1-4593-8453-7381e79ac32a',
    phone: '09-3888-2345',
    picture: 'https://randomuser.me/api/portraits/med/men/60.jpg',
    children: [
      {
        email: 'flore.wierts@example.com',
        gender: 'female',
        name: 'Wierts',
        address: 'Groenekan',
        id: '91d8df99-e0e3-437e-ade6-d584da907e0d',
        phone: '(070)-414-6254',
        picture: 'https://randomuser.me/api/portraits/med/women/2.jpg',
        children: [
          {
            email: 'andreias.novaes@example.com',
            gender: 'male',
            name: 'Novaes',
            address: 'Almirante Tamandaré',
            id: '77453284-45d8-4745-8e35-857f1166d236',
            phone: '(84) 7552-2743',
            picture: 'https://randomuser.me/api/portraits/med/men/50.jpg',
            children: [],
          },
          {
            email: 'thomas.denys@example.com',
            gender: 'male',
            name: 'Denys',
            address: 'Richmond',
            id: 'f43d0d3c-87d2-4e03-a4da-313c04e05831',
            phone: '832-718-7800',
            picture: 'https://randomuser.me/api/portraits/med/men/97.jpg',
            children: [],
          },
          {
            email: 'eberhard.schnieders@example.com',
            gender: 'male',
            name: 'Schnieders',
            address: 'Herrnhut',
            id: 'b8306dc4-e1c9-49a8-b67f-00a090d7d4cc',
            phone: '0096-3199957',
            picture: 'https://randomuser.me/api/portraits/med/men/31.jpg',
            children: [],
          },
        ],
      },
      {
        email: 'nelly.roy@example.com',
        gender: 'female',
        name: 'Roy',
        address: 'Le Mont-sur-Lausanne',
        id: '6ae39fbd-c0b4-479c-83a2-be0657794390',
        phone: '076 858 42 55',
        picture: 'https://randomuser.me/api/portraits/med/women/81.jpg',
        children: [
          {
            email: 'marion.lambert@example.com',
            gender: 'male',
            name: 'Lambert',
            address: 'Bunbury',
            id: '3b79f13f-81ec-4fc3-b38f-fa26c24c5a6b',
            phone: '08-3772-8695',
            picture: 'https://randomuser.me/api/portraits/med/men/13.jpg',
            children: [],
          },
          {
            email: 'erin.doyle@example.com',
            gender: 'female',
            name: 'Doyle',
            address: 'Duleek',
            id: '32504102-2978-4418-9098-3f4dd1563625',
            phone: '011-005-9832',
            picture: 'https://randomuser.me/api/portraits/med/women/33.jpg',
            children: [],
          },
          {
            email: 'therese.menard@example.com',
            gender: 'female',
            name: 'Menard',
            address: 'Vufflens-la-Ville',
            id: '3c85b6f0-e048-418a-9050-9988761f92f6',
            phone: '077 099 07 95',
            picture: 'https://randomuser.me/api/portraits/med/women/16.jpg',
            children: [],
          },
        ],
      },
      {
        email: 'amber.hayes@example.com',
        gender: 'female',
        name: 'Hayes',
        address: 'Cork',
        id: 'b2ed79ac-9c50-475f-8935-05719ee26bcd',
        phone: '031-661-7556',
        picture: 'https://randomuser.me/api/portraits/med/women/49.jpg',
        children: [
          {
            email: 'madeleine.ho@example.com',
            gender: 'female',
            name: 'Ho',
            address: 'Kadoelen',
            id: 'a9c8f682-3a85-4056-8930-5e97218775dc',
            phone: '(614)-287-4558',
            picture: 'https://randomuser.me/api/portraits/med/women/42.jpg',
            children: [],
          },
          {
            email: 'johanna.michel@example.com',
            gender: 'female',
            name: 'Michel',
            address: 'Liesberg',
            id: 'cffde3d1-bd49-474f-8ec1-69ef67f4f476',
            phone: '078 922 22 87',
            picture: 'https://randomuser.me/api/portraits/med/women/65.jpg',
            children: [],
          },
          {
            email: 'umit.oymen@example.com',
            gender: 'male',
            name: 'Öymen',
            address: 'Antalya',
            id: 'c8102447-fd79-4bce-8548-3e0a0a1e6633',
            phone: '(115)-981-5318',
            picture: 'https://randomuser.me/api/portraits/med/men/16.jpg',
            children: [],
          },
        ],
      },
    ],
  },
  {
    email: 'olivier.kraft@example.com',
    gender: 'male',
    name: 'Kraft',
    address: 'Almen',
    id: '94e19bb8-c5bc-4574-8f75-675d21fa322c',
    phone: '(242)-115-7179',
    picture: 'https://randomuser.me/api/portraits/med/men/19.jpg',
    children: [],
  },
  {
    email: 'lylou.moreau@example.com',
    gender: 'female',
    name: 'Moreau',
    address: 'Rouen',
    id: '11a58c8e-4f6d-4463-865e-02f3802b7312',
    phone: '05-20-88-73-31',
    picture: 'https://randomuser.me/api/portraits/med/women/75.jpg',
    children: [
      {
        email: 'melike.ozkok@example.com',
        gender: 'female',
        name: 'Özkök',
        address: 'Afyonkarahisar',
        id: 'c6663aef-a80a-45b8-8ab6-f0931e909856',
        phone: '(861)-633-3846',
        picture: 'https://randomuser.me/api/portraits/med/women/74.jpg',
        children: [],
      },
      {
        email: 'jutta.olivier@example.com',
        gender: 'female',
        name: 'Olivier',
        address: 'Geltwil',
        id: 'bbb17f32-3900-4b3a-9730-90e7d9e1f51d',
        phone: '079 404 37 85',
        picture: 'https://randomuser.me/api/portraits/med/women/8.jpg',
        children: [],
      },
      {
        email: 'kate.hughes@example.com',
        gender: 'female',
        name: 'Hughes',
        address: 'Rotorua',
        id: '63e56feb-0770-4a8f-848c-a4e1411d6f2e',
        phone: '(419)-181-3379',
        picture: 'https://randomuser.me/api/portraits/med/women/31.jpg',
        children: [],
      },
    ],
  },
  {
    email: 'eloise.noel@example.com',
    gender: 'female',
    name: 'Noel',
    address: 'Rouen',
    id: 'c261640e-2f48-450e-9a42-65686246cb8f',
    phone: '05-20-89-47-85',
    picture: 'https://randomuser.me/api/portraits/med/women/36.jpg',
    children: [
      {
        email: 'zara.zhang@example.com',
        gender: 'female',
        name: 'Zhang',
        address: 'Taupo',
        id: 'de0d3ed0-7c9b-4c8d-ad28-4e174629eca7',
        phone: '(106)-415-4867',
        picture: 'https://randomuser.me/api/portraits/med/women/64.jpg',
        children: [],
      },
      {
        email: 'jasper.ross@example.com',
        gender: 'male',
        name: 'Roß',
        address: 'Montabaur',
        id: '821c829c-140d-4945-b9fc-311f173cd82f',
        phone: '0512-4436963',
        picture: 'https://randomuser.me/api/portraits/med/men/57.jpg',
        children: [],
      },
      {
        email: 'alex.burke@example.com',
        gender: 'female',
        name: 'Burke',
        address: 'Salisbury',
        id: '67bf99f5-14da-4c67-b57c-af2b4dce3f83',
        phone: '016973 80646',
        picture: 'https://randomuser.me/api/portraits/med/women/9.jpg',
        children: [],
      },
    ],
  },
  {
    email: 'yenthe.vandertang@example.com',
    gender: 'female',
    name: 'Van der Tang',
    address: 'Krommeniedijk',
    id: '79b006e8-7d3e-47c0-81b8-187db3ec93d9',
    phone: '(215)-467-1476',
    picture: 'https://randomuser.me/api/portraits/med/women/22.jpg',
    children: [
      {
        email: 'frederikke.moller@example.com',
        gender: 'male',
        name: 'Møller',
        address: 'København Ø',
        id: 'd71f453a-bf51-49a6-857a-fa1dde814197',
        phone: '46278098',
        picture: 'https://randomuser.me/api/portraits/med/men/37.jpg',
        children: [
          {
            email: 'fabien.schipperen@example.com',
            gender: 'male',
            name: 'Schipperen',
            address: 'Vrouwenpolder',
            id: 'd5e35cdc-63fc-45e4-8157-291ae37f4507',
            phone: '(211)-836-1945',
            picture: 'https://randomuser.me/api/portraits/med/men/34.jpg',
            children: [],
          },
          {
            email: 'ariane.johnson@example.com',
            gender: 'female',
            name: 'Johnson',
            address: 'Flatrock',
            id: '4adc21d9-a79d-426d-80bc-4401c039cbf5',
            phone: '372-953-3521',
            picture: 'https://randomuser.me/api/portraits/med/women/15.jpg',
            children: [],
          },
          {
            email: 'marvin.sanders@example.com',
            gender: 'male',
            name: 'Sanders',
            address: 'Bangor',
            id: 'c5fe97e6-d32b-4520-803d-971b34ef46d3',
            phone: '017684 33315',
            picture: 'https://randomuser.me/api/portraits/med/men/70.jpg',
            children: [],
          },
        ],
      },
      {
        email: 'sean.fisher@example.com',
        gender: 'male',
        name: 'Fisher',
        address: 'Salford',
        id: '00c00fca-4e82-4d60-8256-0ee102c4d80e',
        phone: '015395 15786',
        picture: 'https://randomuser.me/api/portraits/med/men/36.jpg',
        children: [
          {
            email: 'bhrh.khmrw@example.com',
            gender: 'female',
            name: 'کامروا',
            address: 'شیراز',
            id: '89dc379a-7955-46b5-9b18-585dc819eab8',
            phone: '078-37105376',
            picture: 'https://randomuser.me/api/portraits/med/women/18.jpg',
            children: [],
          },
          {
            email: 'dustin.nichols@example.com',
            gender: 'male',
            name: 'Nichols',
            address: 'Dubbo',
            id: 'ab7a788f-37fb-4389-9f5a-a07a52ba75dc',
            phone: '00-5387-7679',
            picture: 'https://randomuser.me/api/portraits/med/men/59.jpg',
            children: [],
          },
          {
            email: 'vernon.turner@example.com',
            gender: 'male',
            name: 'Turner',
            address: 'Cashel',
            id: '4a9d7c3a-2172-4c95-9df9-9ecb4cf75178',
            phone: '011-795-6933',
            picture: 'https://randomuser.me/api/portraits/med/men/59.jpg',
            children: [],
          },
        ],
      },
      {
        email: 'nikolai.molleman@example.com',
        gender: 'male',
        name: 'Molleman',
        address: 'Midlaren',
        id: 'cef7b9e8-1c91-4c3e-9b37-43ab6161bd4f',
        phone: '(656)-018-3296',
        picture: 'https://randomuser.me/api/portraits/med/men/87.jpg',
        children: [],
      },
    ],
  },
  {
    email: 'franklin.roberts@example.com',
    gender: 'male',
    name: 'Roberts',
    address: 'San Diego',
    id: 'b3f65e22-255b-4727-84cc-c034423cc019',
    phone: '(890)-712-0816',
    picture: 'https://randomuser.me/api/portraits/med/men/18.jpg',
    children: [],
  },
  {
    email: 'helmine.lied@example.com',
    gender: 'female',
    name: 'Lied',
    address: 'Tønsberg',
    id: 'adf082fa-13b7-42f2-9396-b51ec8154f13',
    phone: '38269778',
    picture: 'https://randomuser.me/api/portraits/med/women/92.jpg',
    children: [
      {
        email: 'archer.hughes@example.com',
        gender: 'male',
        name: 'Hughes',
        address: 'Tauranga',
        id: 'c7dd9a47-b985-4c91-839d-b180add389d2',
        phone: '(970)-040-6223',
        picture: 'https://randomuser.me/api/portraits/med/men/57.jpg',
        children: [],
      },
      {
        email: 'norman.wade@example.com',
        gender: 'male',
        name: 'Wade',
        address: 'Nowra',
        id: 'e7f8740c-e9b5-43aa-83ef-cabe59a93af9',
        phone: '01-7416-3416',
        picture: 'https://randomuser.me/api/portraits/med/men/31.jpg',
        children: [],
      },
      {
        email: 'avery.morin@example.com',
        gender: 'female',
        name: 'Morin',
        address: 'Radisson',
        id: '37ada746-28c2-404f-a49f-3882f015da74',
        phone: '767-129-0068',
        picture: 'https://randomuser.me/api/portraits/med/women/8.jpg',
        children: [],
      },
    ],
  },
  {
    email: 'mohammed.blanc@example.com',
    gender: 'male',
    name: 'Blanc',
    address: 'Mettmenstetten',
    id: '4aa74617-b59c-4c37-8066-3fae52fb0458',
    phone: '078 173 28 27',
    picture: 'https://randomuser.me/api/portraits/med/men/93.jpg',
    children: [
      {
        email: 'gordon.beck@example.com',
        gender: 'male',
        name: 'Beck',
        address: 'Beaumont',
        id: 'a201d814-2dbd-4016-8559-7c8e0b71204b',
        phone: '(329)-859-9524',
        picture: 'https://randomuser.me/api/portraits/med/men/30.jpg',
        children: [
          {
            email: 'david.gerard@example.com',
            gender: 'male',
            name: 'Gerard',
            address: 'Saint-Pierre',
            id: '92f17df3-b7cc-4ef7-9fea-00532b1e9d8d',
            phone: '01-02-08-04-32',
            picture: 'https://randomuser.me/api/portraits/med/men/2.jpg',
            children: [],
          },
          {
            email: 'ella.olson@example.com',
            gender: 'female',
            name: 'Olson',
            address: 'Oranmore',
            id: '620797d7-9656-4bd0-8d69-c14ce87b4769',
            phone: '041-113-7820',
            picture: 'https://randomuser.me/api/portraits/med/women/82.jpg',
            children: [],
          },
          {
            email: 'cora.vanlunteren@example.com',
            gender: 'female',
            name: 'Van Lunteren',
            address: 'Sint Nicolaasga',
            id: 'bb6423bd-44a1-411e-8de9-7f1af48bbeea',
            phone: '(611)-700-0236',
            picture: 'https://randomuser.me/api/portraits/med/women/38.jpg',
            children: [],
          },
        ],
      },
      {
        email: 'myraaly.mhmdkhn@example.com',
        gender: 'male',
        name: 'محمدخان',
        address: 'زنجان',
        id: 'ba86c6ff-9f22-47dc-82c9-13ae172f8392',
        phone: '054-44680780',
        picture: 'https://randomuser.me/api/portraits/med/men/34.jpg',
        children: [],
      },
      {
        email: 'cassandre.gaillard@example.com',
        gender: 'female',
        name: 'Gaillard',
        address: 'Vitry-sur-Seine',
        id: 'f57fad40-6adb-4712-8e5b-3716cd526a8b',
        phone: '01-25-60-31-37',
        picture: 'https://randomuser.me/api/portraits/med/women/41.jpg',
        children: [
          {
            email: 'benjamin.rasmussen@example.com',
            gender: 'male',
            name: 'Rasmussen',
            address: 'Kongsvinger',
            id: '3a6cd8d9-bbf8-4e50-882e-bb93ec9a33f2',
            phone: '46133425',
            picture: 'https://randomuser.me/api/portraits/med/men/67.jpg',
            children: [],
          },
          {
            email: 'awyn.mrdy@example.com',
            gender: 'female',
            name: 'مرادی',
            address: 'ایلام',
            id: '48b0aac4-4558-4980-8d7a-f3278617d993',
            phone: '077-59338546',
            picture: 'https://randomuser.me/api/portraits/med/women/38.jpg',
            children: [],
          },
          {
            email: 'jimi.lehtonen@example.com',
            gender: 'male',
            name: 'Lehtonen',
            address: 'Sipoo',
            id: '0fce8506-94d0-4b65-8a66-5a996dc80eac',
            phone: '05-898-154',
            picture: 'https://randomuser.me/api/portraits/med/men/1.jpg',
            children: [],
          },
        ],
      },
    ],
  },
  {
    email: 'sandra.charles@example.com',
    gender: 'female',
    name: 'Charles',
    address: 'Vitry-sur-Seine',
    id: '12ae371f-254e-4be7-8cde-dda7f7b75362',
    phone: '02-32-00-59-98',
    picture: 'https://randomuser.me/api/portraits/med/women/63.jpg',
    children: [
      {
        email: 'omur.berberoglu@example.com',
        gender: 'female',
        name: 'Berberoğlu',
        address: 'Kastamonu',
        id: '111b8c47-4d0e-4bb9-91d0-08971e85c60f',
        phone: '(242)-908-9967',
        picture: 'https://randomuser.me/api/portraits/med/women/23.jpg',
        children: [],
      },
      {
        email: 'emely.nerli@example.com',
        gender: 'female',
        name: 'Nerli',
        address: 'Leirvik',
        id: '6e2ddc2f-7309-4089-8cbf-3ace59bcc2cb',
        phone: '25652520',
        picture: 'https://randomuser.me/api/portraits/med/women/31.jpg',
        children: [],
      },
      {
        email: 'hudson.singh@example.com',
        gender: 'male',
        name: 'Singh',
        address: 'Tecumseh',
        id: '470c4c71-dec6-4812-8475-aa9da1310ede',
        phone: '278-433-9707',
        picture: 'https://randomuser.me/api/portraits/med/men/17.jpg',
        children: [
          {
            email: 'yasemin.tahincioglu@example.com',
            gender: 'female',
            name: 'Tahincioğlu',
            address: 'Eskişehir',
            id: 'bc8a26f0-1a19-4306-80cc-f0956f8a1d88',
            phone: '(998)-508-2328',
            picture: 'https://randomuser.me/api/portraits/med/women/29.jpg',
            children: [],
          },
          {
            email: 'astrid.thomsen@example.com',
            gender: 'female',
            name: 'Thomsen',
            address: 'Sundby/Erslev',
            id: '670aed1a-9ae9-4f31-9ac2-215e7dfd90db',
            phone: '65467948',
            picture: 'https://randomuser.me/api/portraits/med/women/22.jpg',
            children: [],
          },
          {
            email: 'marietta.drager@example.com',
            gender: 'female',
            name: 'Dräger',
            address: 'Teuchern',
            id: 'dc32170c-ca3f-4cd0-87e2-d74ea68921ad',
            phone: '0737-2885104',
            picture: 'https://randomuser.me/api/portraits/med/women/59.jpg',
            children: [],
          },
        ],
      },
    ],
  },
];

export default data;
