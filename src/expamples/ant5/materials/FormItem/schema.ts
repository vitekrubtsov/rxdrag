import { INodeSchema } from "core";
import { createSchema } from "react-shells/ant5/shared/createSchema";

export const formItemSchema: INodeSchema = createSchema([
  {
    componentName: "FormItem",
    props: {
      label: "$colon",
    },
    children: [
      {
        componentName: "Switch",
        "x-field": {
          name: "colon",
          valuePropName: "checked",
        },
        props:{
          defaultChecked: true
        }
      },
    ]
  },
  {
    componentName: "FormItem",
    props: {
      label: "$label",
    },
    children: [
      {
        componentName: "Input",
        "x-field": {
          name: "label",
        },
      }
    ]
  },
  {
    componentName: "FormItem",
    props: {
      label: "$labelAlign",
    },
    children: [
      {
        "x-field": {
          name: "labelAlign",
        },
        componentName: "Radio.Group",
        props: {
          optionType: "button",
          options: [
            {
              label: "$right",
              value: "right"
            },
            {
              label: "$left",
              value: "left"
            },
          ],
          defaultValue: "right",
        }
      }
    ]
  },
  {
    componentName: "FormItem",
    props: {
      label: "$labelWrap",
    },
    children: [
      {
        "x-field": {
          name: "labelWrap",
          valuePropName: "checked",
        },
        componentName: "Switch"
      }
    ]
  },
  {
    "x-field": {
      name: "labelCol",
    },
    componentName: "ColInput",
    props: {
      title: "$labelCol",
      subTitles: {
        span: "$span",
        flex: "flex",
        offset: "$offset",
        order: "$order",
        pull: "$pull",
        push: "$push",
      }
    }
  },
  {
    "x-field": {
      name: "wrapperCol",
    },
    componentName: "ColInput",
    props: {
      title: "$wrapperCol",
      subTitles: {
        span: "$span",
        flex: "flex",
        offset: "$offset",
        order: "$order",
        pull: "$pull",
        push: "$push",
      }
    }
  },
])