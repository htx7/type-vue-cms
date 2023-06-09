import type { ItableConfig } from '@/types/table'

const tableConfig: ItableConfig = {
  title: '部门列表',
  newItemText: '新建部门',
  columnProps: [
    {
      type: 'index',
      width: 60,
      prop: ''
    },
    {
      label: '部门名称',
      prop: 'name',
      width: 120
    },
    {
      label: '部门领导',
      prop: 'leader',
      width: 120
    },
    {
      type: 'custom',
      label: '上级部门',
      prop: 'parentId',
      slotName: 'parentId',
      width: 120
    },
    {
      type: 'timeAt',
      label: '创建时间',
      prop: 'createAt'
    },
    {
      type: 'timeAt',
      label: '最近修改',
      prop: 'updateAt'
    },
    {
      type: 'handler',
      label: '操作',
      width: 150,
      prop: ''
    }
  ]
}

export default tableConfig
