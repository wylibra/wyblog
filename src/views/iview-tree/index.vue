<template>
  <div class="app-container">
    <Tree ref="tree" :data="organizationData" :render="renderContent" class="demo-tree-render"></Tree>
  </div>
</template>

<script>
/**
 * tree树状结构组件
 * 功能
 * 1、根据子节点，设置其整条链路的父节点的展开状态为开
 * 2、根据组ID，为其添加删除按钮
 */
export default {
  name: "organization",
  data() {
    return {
      organizationData: [
        {
          name: "公司A",
          group_id: 27,
          is_leader: 1,
          expand: true,
          children: [],
          render: (h, { root, node, data }) => {
            return h(
              "span",
              {
                style: {
                  display: "inline-block",
                  width: "100%",
                },
              },
              [
                h("span", [
                  h("Icon", {
                    props: {
                      type: "ios-folder-outline",
                    },
                    style: {
                      marginRight: "8px",
                    },
                  }),
                  h("span", data.name),
                ]),
              ]
            );
          },
        },
      ],
      buttonProps: {
        type: "default",
        size: "small",
      },
      group_id: "",
      is_leader: "",
      user_id: "",
      ParentId: "",
    };
  },
  computed: {},
  mounted() {
    this.organizationData[0].children = [
      {
        children: [
          {
            id: 100171,
            name: "胡AA",
          },
          {
            children: [
              {
                id: 100106,
                name: "孙AA",
              },
            ],
            id: 1,
            name: "测试部门",
          },
          {
            children: [
              {
                id: 100157,
                name: "何AA",
              },
              {
                children: [
                  {
                    id: 100171,
                    name: "胡AA",
                  },

                  {
                    id: 100230,
                    name: "杨AA",
                  },
                  {
                    id: 100244,
                    name: "冯AA",
                  },
                  {
                    id: 100249,
                    name: "QQQ",
                  },
                  {
                    id: 100254,
                    name: "AAA",
                  },
                  {
                    id: 100323,
                    name: "张W",
                  },
                ],
                group_manager_name: "何AA",
                id: 1,
                name: "互助后端组",
              },
              {
                children: [
                  {
                    id: 100157,
                    name: "何CC",
                  },
                  {
                    id: 100224,
                    name: "李AA",
                  },
                  {
                    id: 100310,
                    name: "邢AA",
                  },
                  {
                    id: 100311,
                    name: "来AA",
                  },
                  {
                    id: 100312,
                    name: "赵强",
                  },
                  {
                    id: 100329,
                    name: "黄DD",
                  },
                ],
                group_manager_name: "何AA",
                id: 2,
                name: "前端组",
              },
            ],
            id: 2,
            name: "开发部",
          },
        ],
        id: 1,
        name: "业务研发中心",
      },
      {
        children: [
          {
            id: 100184,
            name: "张CC",
          },
          {
            children: [
              {
                id: 100024,
                name: "杨CC",
              },
              {
                children: [
                  {
                    id: 100134,
                    name: "张SS",
                  },
                  {
                    id: 100137,
                    name: "AAA",
                  },
                  {
                    id: 100031,
                    name: "XX",
                  },
                  {
                    id: 100120,
                    name: "DD",
                  },
                ],
                group_manager_name: "杨CC",
                id: 20,
                name: "产品组",
              },
              {
                children: [
                  {
                    id: 100139,
                    name: "苏CC",
                  },
                ],
                group_manager_name: "杨CC",
                id: 21,
                name: "运营组",
              },
            ],
            id: 7,
            name: "平台产品运营部",
          },
          {
            children: [
              {
                id: 100112,
                name: "王CC",
              },
              {
                children: [
                  {
                    id: 100203,
                    name: "蒋CC",
                  },
                  {
                    id: 100204,
                    name: "张CC",
                  },
                  {
                    id: 100205,
                    name: "周CC",
                  },
                ],
                group_manager_name: "王CC",
                id: 23,
                name: "保险规划组",
              },
            ],
            id: 8,
            name: "vip 运营部",
          },
        ],
        id: 2,
        name: "智能营销运营中心",
      },
      {
        children: [
          {
            id: 100150,
            name: "刘AA",
          },
          {
            children: [
              {
                id: 100150,
                name: "刘AA",
              },
              {
                children: [
                  {
                    id: 100226,
                    name: "杨SSS",
                  },
                  {
                    id: 100227,
                    name: "DDD",
                  },
                  {
                    id: 100090,
                    name: "AAA",
                  },
                  {
                    id: 100245,
                    name: "刘QQ",
                  },
                  {
                    id: 100005,
                    name: "王QQ",
                  },
                  {
                    id: 100046,
                    name: "李SS",
                  },
                ],
                group_manager_name: "刘AA",
                id: 24,
                name: "财务开发组",
              },
              {
                children: [
                  {
                    id: 100110,
                    name: "DDD",
                  },
                  {
                    id: 100045,
                    name: "刘CC",
                  },
                  {
                    id: 100084,
                    name: "BBB",
                  },
                  {
                    id: 100118,
                    name: "SSS",
                  },
                  {
                    id: 100121,
                    name: "AAA",
                  },
                ],
                group_manager_name: "刘CC",
                id: 25,
                name: "流量开发组",
              },
            ],
            id: 9,
            name: "技术产品开发部",
          },
          {
            children: [
              {
                id: 100029,
                name: "刘AA",
              },
              {
                children: [
                  {
                    id: 100028,
                    name: "刘AA",
                  },
                  {
                    id: 100029,
                    name: "AAA",
                  },
                  {
                    id: 100087,
                    name: "AAA",
                  },
                  {
                    id: 100145,
                    name: "刘AA",
                  },
                  {
                    id: 100102,
                    name: "刘AA",
                  },
                ],
                group_manager_name: "AAA",
                id: 27,
                name: "平台质量部",
              },
            ],
            id: 10,
            name: "平台质量部",
          },
        ],
        id: 3,
        name: "技术研发中心",
      },
    ];
    this.organizationData[0].children = this.formatTree(
      this.organizationData[0].children
    );
    this.organizationList();
  },
  methods: {
    renderContent(h, { root, node, data }) {
      return h(
        "span",
        {
          style: {
            display: "inline-block",
            width: "100%",
          },
        },
        [
          h("span", [
            h("Icon", {
              props: {
                type: "ios-paper-outline",
              },
              style: {
                marginRight: "8px",
              },
            }),
            h("span", data.name),
          ]),
          h(
            "span",
            {
              style: {
                display: "inline-block",
                float: "right",
                color: "red",
                // marginRight: "32px",
              },
            },
            [
              data.is_delete
                ? h("Button", {
                    props: Object.assign({}, this.buttonProps, {
                      icon: "ios-remove",
                    }),
                    on: {
                      click: () => {
                        this.remove(root, node, data);
                      },
                    },
                  })
                : "",
            ]
          ),
        ]
      );
    },
    remove(root, node, data) {
      this.$Modal.confirm({
        title: "删除",
        content: `确认删除【${data.name}】?`,
        onOk: () => {
          this.$Message.success("删除成功！");
        },
        onCancel: () => {
          this.$Message.info("取消删除！");
        },
      });
    },
    formatTree(tree) {
      const result = [];
      tree.forEach((item) => {
        let id = item.id;
        let name = item.name;
        let children = item.children || [];
        let expand = this.ParentId.includes(id);
        // 如果有子节点，递归
        if (children && children.length) {
          children = this.formatTree(children);
        }
        if (this.is_leader && this.group_id == id) {
          children.forEach((cell) => {
            cell.is_delete = true;
          });
        }
        result.push({ id, name, children, expand });
      });
      return result;
    },
    // 获取整条数据链
    getParentId(tree, children, id) {
      for (let i = 0; i < tree.length; i++) {
        let item = tree[i];
        if (Number(item.id) === Number(id)) {
          children.push(item.id);
          return children;
        }
        if (item.children && item.children.length > 0) {
          children.push(item.id);
          let rs = this.getParentId(item.children, children, id);
          if (rs) {
            return rs;
          } else {
            let index = children.indexOf(item.id);
            if (index > -1) {
              children.splice(index, 1);
            }
          }
        }
      }
      return false;
    },
    organizationList() {
      this.group_id = this.organizationData[0].group_id;
      this.is_leader = this.organizationData[0].is_leader;
      this.ParentId = this.getParentId(
        this.organizationData[0].children,
        [],
        this.group_id
      );
      this.organizationData[0].children = this.formatTree(
        this.organizationData[0].children
      );
    },
  },
};
</script>

<style lang="less">
.demo-tree-render {
  width: 500px;
  .ivu-tree-title {
    width: 100%;
  }
}
</style>
