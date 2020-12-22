import { useState } from 'react'
import { Button, Row, Typography } from 'antd'
import { HighlightOutlined } from '@ant-design/icons'
import { useDraggableModal } from '../../../common/modal/draggable'

const { Paragraph } = Typography

const TabPaneContent = ({ title }) => {
  const { showDraggableModal, renderDraggableModal, hideDraggableModal } = useDraggableModal()
  const [editableStr, setEditableStr] = useState(title)
  return <>
    {
      renderDraggableModal({
        onOk: () => hideDraggableModal(),
        render: () => title,
        title: 'add widget'
      })
    }
    <Row justify="space-between">
      <Paragraph
        editable={{
          icon: <HighlightOutlined />,
          tooltip: 'click to edit text',
          onChange: setEditableStr,
        }}
      >
        {editableStr}
      </Paragraph>
      <Button onClick={showDraggableModal}>add</Button>
    </Row>
  </>
}

export default TabPaneContent
