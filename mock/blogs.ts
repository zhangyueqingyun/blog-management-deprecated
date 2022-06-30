export default {
    'GET /api/blogs': (req: any, res: any) => {
      res.json({
        code: 20000,
        data:  [{
            id: 0,
            title: '几句话说清浏览器渲染过程',
            description: 'Webkit 是 Safari 浏览器的内核（渲染引擎），由苹果公司开发，负责将网页数据渲染为图像。',
            ossPath: '几句话说清Webkit渲染过程.md',
            datetime: '2021-01-01',
            category: '技术',
            signs: 'Webkit'
        }],
        message: ''
      });
    }
  };
  