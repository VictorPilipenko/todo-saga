import { v4 as uuidv4 } from 'uuid';

const add = panes => {
  const newPanes = [...panes];
  const id = uuidv4()
  newPanes.push({
    name: 'New Tab',
    title: 'Content of new Tab',
    id
  })
  return {
    newPanes, id
  }
}

const remove = (targetKey, activeKey, panes) => {
  let newActiveKey = activeKey;
  let lastIndex;
  panes.forEach((pane, i) => {
    if (pane.id === targetKey) {
      lastIndex = i - 1;
    }
  });
  const newPanes = panes.filter(pane => pane.id !== targetKey);
  if (newPanes.length && newActiveKey === targetKey) {
    if (lastIndex >= 0) {
      newActiveKey = newPanes[lastIndex].id;
    } else {
      newActiveKey = newPanes[0].id;
    }
  }
  return {
    newPanes, newActiveKey
  }
}

export {
  add,
  remove
}
