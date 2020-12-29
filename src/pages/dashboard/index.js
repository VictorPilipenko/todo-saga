import { Tabs } from 'antd'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import TabPaneContent from './TabPaneContent'
import { add, remove } from './utils'

const { TabPane } = Tabs

const initialPanes = [
  { name: 'Tab 1', title: 'Content of Tab 1', id: uuidv4(), closable: true },
  { name: 'Tab 2', title: 'Content of Tab 2', id: uuidv4(), closable: true },
  { name: 'Tab 3', title: 'Content of Tab 3', id: uuidv4(), closable: true },
]

const Dashboard = () => {
  const [activeID, onActiveIDChange] = useState(initialPanes[0].id)
  const [panes, onEditPanes] = useState(initialPanes)

  const onEdit = (targetKey, action) => {
    switch (action) {
      case 'add': {
        const { newPanes, id } = add(panes)
        onEditPanes(newPanes)
        onActiveIDChange(id)
        break
      }
      case 'remove': {
        const { newPanes, newActiveKey } = remove(targetKey, activeID, panes)
        onEditPanes(newPanes)
        onActiveIDChange(newActiveKey)
        break
      }
      default:
        return
    }
  }

  return (
    <>
      <Tabs
        type="editable-card"
        onChange={onActiveIDChange}
        activeKey={activeID}
        onEdit={onEdit}
      >
        {panes.map((pane) => (
          <TabPane tab={pane.name} key={pane.id} closable={pane.closable}>
            <TabPaneContent title={pane.title} />
          </TabPane>
        ))}
      </Tabs>
    </>
  )
}

export default Dashboard
