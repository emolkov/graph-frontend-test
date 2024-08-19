export default [
  {
    nodes: [
      { id: 0, name: "node1" },
      { id: 1, name: "node2" },
    ],
    edges: [{ fromId: 0, toId: 1 }],
  },
  {
    nodes: [
      { id: 0, name: "start" },
      { id: 1, name: "foo" },
      { id: 2, name: "bar" },
      { id: 3, name: "end1" },
      { id: 4, name: "end2" },
    ],
    edges: [
      { fromId: 0, toId: 1 },
      { fromId: 0, toId: 2 },
      { fromId: 1, toId: 3 },
      { fromId: 2, toId: 4 },
    ],
  },
  {
    nodes: [
      { id: 0, name: "apple" },
      { id: 1, name: "banana" },
      { id: 2, name: "orange" },
      { id: 3, name: "pineapple" },
      { id: 4, name: "kiwi" },
      { id: 5, name: "watermelon" },
      { id: 6, name: "mango" },
      { id: 7, name: "peach" },
      { id: 8, name: "pearl" },
    ],
    edges: [
      { fromId: 0, toId: 6 },
      { fromId: 1, toId: 3 },
      { fromId: 1, toId: 6 },
      { fromId: 5, toId: 4 },
      { fromId: 5, toId: 3 },
      { fromId: 6, toId: 2 },
      { fromId: 6, toId: 8 },
      { fromId: 3, toId: 2 },
      { fromId: 4, toId: 7 },
    ],
  },
];
