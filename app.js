const categories = [
    {
        id: 'chat',
        name: '聊天AI',
        icon: '💬',
        description: '通用AI对话大模型',
        subCategories: [
            { id: 'llm', name: '大语言模型' }
        ]
    },
    {
        id: 'coder',
        name: '编程开发',
        icon: '⌨️',
        description: 'AI编程开发工具',
        subCategories: [
            { id: 'code-assist', name: '代码助手' },
            { id: 'code-agent', name: '代码智能体' }
        ]
    },
    {
        id: 'image',
        name: '图像AI',
        icon: '🎨',
        description: 'AI图像生成与处理',
        subCategories: [
            { id: 'image-gen', name: '图像生成' },
            { id: 'image-edit', name: '图像编辑' },
            { id: 'image-design', name: '设计工具' }
        ]
    },
    {
        id: 'video',
        name: '视频AI',
        icon: '🎬',
        description: 'AI视频生成与编辑',
        subCategories: [
            { id: 'video-gen', name: '视频生成' },
            { id: 'video-edit', name: '视频编辑' },
            { id: 'video-avatar', name: '数字人' }
        ]
    },
    {
        id: 'office',
        name: '办公效率',
        icon: '📊',
        description: 'AI办公效率工具',
        subCategories: [
            { id: 'ppt', name: 'PPT制作' },
            { id: 'doc', name: '文档处理' },
            { id: 'meeting', name: '会议助手' },
            { id: 'mindmap', name: '思维导图' }
        ]
    },
    {
        id: 'writing',
        name: '文本写作',
        icon: '✍️',
        description: 'AI文本写作与内容',
        subCategories: [
            { id: 'write-assist', name: '写作辅助' },
            { id: 'write-check', name: '写作检查' }
        ]
    },
    {
        id: 'search',
        name: '搜索学术',
        icon: '🔍',
        description: 'AI搜索引擎与学术科研',
        subCategories: [
            { id: 'ai-search', name: 'AI搜索' },
            { id: 'academic', name: '学术搜索' }
        ]
    },
    {
        id: 'agent',
        name: '智能体',
        icon: '🤖',
        description: 'AI智能体平台',
        subCategories: [
            { id: 'agent-platform', name: 'Agent平台' },
            { id: 'agent-framework', name: '开发框架' }
        ]
    },
    {
        id: 'audio',
        name: '音频AI',
        icon: '🎵',
        description: 'AI音频创作与处理',
        subCategories: [
            { id: 'music', name: '音乐生成' },
            { id: 'tts', name: '语音合成' },
            { id: 'audio-edit', name: '音频处理' }
        ]
    },
    {
        id: 'design',
        name: '设计工具',
        icon: '🎯',
        description: 'AI设计工具',
        subCategories: [
            { id: 'logo', name: 'Logo设计' },
            { id: 'ui-design', name: 'UI设计' },
            { id: '3d-design', name: '3D设计' }
        ]
    },
    {
        id: 'medical',
        name: '医疗健康',
        icon: '🏥',
        description: 'AI医疗健康工具',
        subCategories: [
            { id: 'medical-ai', name: '医疗AI' },
            { id: 'health', name: '健康管理' }
        ]
    },
    {
        id: 'translation',
        name: '翻译工具',
        icon: '🌐',
        description: 'AI翻译工具',
        subCategories: [
            { id: 'translate', name: '在线翻译' },
            { id: 'doc-translate', name: '文档翻译' }
        ]
    },
    {
        id: 'community',
        name: '开源社区',
        icon: '📦',
        description: 'AI开源模型与开发者社区',
        subCategories: [
            { id: 'model-hub', name: '模型平台' },
            { id: 'dev-community', name: '开发社区' }
        ]
    },
    {
        id: 'compute',
        name: '算力服务',
        icon: '⚡',
        description: 'AI算力服务平台',
        subCategories: [
            { id: 'gpu-cloud', name: 'GPU云服务' },
            { id: 'model-platform', name: '模型平台' }
        ]
    },
    {
        id: 'news',
        name: '资讯学习',
        icon: '📰',
        description: 'AI资讯与学习平台',
        subCategories: [
            { id: 'news', name: 'AI资讯' },
            { id: 'learning', name: '学习平台' }
        ]
    },
    {
        id: 'legal',
        name: '法律工具',
        icon: '⚖️',
        description: 'AI法律工具',
        subCategories: [
            { id: 'legal-assist', name: '法律助手' }
        ]
    },
    {
        id: 'detection',
        name: '内容检测',
        icon: '🔎',
        description: 'AI内容检测工具',
        subCategories: [
            { id: 'text-detect', name: '文本检测' },
            { id: 'image-detect', name: '图像检测' }
        ]
    },
    {
        id: 'other',
        name: '其他工具',
        icon: '🛠️',
        description: '其他AI工具',
        subCategories: [
            { id: 'other', name: '其他' }
        ]
    }
];

const tools = [
    { id: 'chatgpt', name: 'ChatGPT', url: 'https://chat.openai.com', description: 'OpenAI旗下AI对话工具，通用问答、代码编写、逻辑分析全能标杆', category: 'chat', subCategory: 'llm', tags: ['api'], views: 250000, likes: 45000, featured: true, createdAt: '2024-01-01' },
    { id: 'claude', name: 'Claude', url: 'https://claude.ai', description: 'Anthropic开发的大语言模型，长文写作、代码解释、总结摘要能力突出', category: 'chat', subCategory: 'llm', tags: ['api'], views: 180000, likes: 32000, featured: true, createdAt: '2024-01-01' },
    { id: 'gemini', name: 'Gemini', url: 'https://gemini.google.com', description: 'Google DeepMind发布的多模态人工智能模型，Google生态原生集成', category: 'chat', subCategory: 'llm', tags: ['free', 'api'], views: 150000, likes: 28000, featured: true, createdAt: '2024-01-01' },
    { id: 'deepseek', name: 'DeepSeek', url: 'https://chat.deepseek.com', description: '幻方量化旗下深度求索自研的开源大模型，代码编写、中文语境适配优秀，API成本低', category: 'chat', subCategory: 'llm', tags: ['opensource', 'api'], views: 120000, likes: 25000, featured: true, createdAt: '2024-01-01' },
    { id: 'doubao', name: '豆包', url: 'https://www.doubao.com', description: '字节跳动旗下免费AI对话助手，具备多模态交互、AI搜索、文档问答等全能力', category: 'chat', subCategory: 'llm', tags: ['free'], views: 98000, likes: 18000, featured: true, createdAt: '2024-01-01' },
    { id: 'tongyi', name: '通义千问', url: 'https://tongyi.aliyun.com', description: '阿里巴巴推出的自研大模型，全能型AI助手，已免费开放', category: 'chat', subCategory: 'llm', tags: ['free', 'api'], views: 85000, likes: 15000, featured: true, createdAt: '2024-01-01' },
    { id: 'wenxin', name: '文心一言', url: 'https://yiyan.baidu.com', description: '百度推出的基于文心大模型的AI对话互动工具', category: 'chat', subCategory: 'llm', tags: ['free', 'api'], views: 78000, likes: 12000, featured: false, createdAt: '2024-01-01' },
    { id: 'kimi', name: 'Kimi', url: 'https://kimi.moonshot.cn', description: '国内Moonshot AI团队出品的超长文本AI助手，支持论文阅读、网页检索', category: 'chat', subCategory: 'llm', tags: ['free', 'api'], views: 72000, likes: 14000, featured: true, createdAt: '2024-01-01' },
    { id: 'xinghuo', name: '讯飞星火', url: 'https://xinghuo.xfyun.cn', description: '科大讯飞推出的认知大模型，具备多模态交互、全场景创作能力', category: 'chat', subCategory: 'llm', tags: ['free', 'api'], views: 65000, likes: 11000, featured: false, createdAt: '2024-01-01' },
    { id: 'tengxuyuanbao', name: '腾讯元宝', url: 'https://yuanbao.tencent.com', description: '基于腾讯混元大模型的AI助手应用，集成AI搜索、总结、写作等能力', category: 'chat', subCategory: 'llm', tags: ['free'], views: 55000, likes: 9000, featured: false, createdAt: '2024-01-01' },
    { id: 'tiangong', name: '天工AI', url: 'https://www.tiangong.cn', description: '昆仑万维推出的AI助手，具备文档音视分析、AI搜索、写作等功能', category: 'chat', subCategory: 'llm', tags: ['free', 'api'], views: 48000, likes: 8000, featured: false, createdAt: '2024-01-01' },
    { id: 'devin', name: 'Devin', url: 'https://devin.ai', description: '全球首个全自主的AI软件工程师智能体，可独立完成软件开发全流程', category: 'coder', subCategory: 'code-agent', tags: ['api'], views: 95000, likes: 18000, featured: true, createdAt: '2024-01-01' },
    { id: 'github-copilot', name: 'GitHub Copilot', url: 'https://github.com/features/copilot', description: 'GitHub与OpenAI合作开发的AI编程工具，提供实时代码建议与自动补全', category: 'coder', subCategory: 'code-assist', tags: ['api'], views: 140000, likes: 25000, featured: true, createdAt: '2024-01-01' },
    { id: 'cursor', name: 'Cursor', url: 'https://cursor.sh', description: 'AI代码编辑器，可快速完成代码重构、理解与编写', category: 'coder', subCategory: 'code-assist', tags: ['free', 'opensource'], views: 85000, likes: 16000, featured: true, createdAt: '2024-01-01' },
    { id: 'trae', name: 'Trae AI编程', url: 'https://trae.ai', description: '字节跳动推出的免费AI编程产品，支持Claude、GPT-4o、DeepSeek等模型', category: 'coder', subCategory: 'code-assist', tags: ['free'], views: 72000, likes: 13000, featured: true, createdAt: '2024-01-01' },
    { id: 'marscode', name: 'MarsCode', url: 'https://marscode.cn', description: '字节豆包旗下的AI编程助手，助力编码效率提升', category: 'coder', subCategory: 'code-assist', tags: ['free'], views: 58000, likes: 10000, featured: false, createdAt: '2024-01-01' },
    { id: 'tongyi-lingma', name: '通义灵码', url: 'https://lingma.aliyun.com', description: '阿里云推出的工程级AI编码助手，集成代码生成、智能问答、编程智能体四大核心模式', category: 'coder', subCategory: 'code-assist', tags: ['free', 'api'], views: 52000, likes: 9000, featured: false, createdAt: '2024-01-01' },
    { id: 'midjourney', name: 'Midjourney', url: 'https://www.midjourney.com', description: 'AI艺术绘图标杆工具，高质量艺术图像生成，创意设计能力突出', category: 'image', subCategory: 'image-gen', tags: ['api'], views: 200000, likes: 40000, featured: true, createdAt: '2024-01-01' },
    { id: 'stable-diffusion', name: 'Stable Diffusion', url: 'https://stability.ai', description: 'Stability AI推出的开源文本到图像生成AI模型', category: 'image', subCategory: 'image-gen', tags: ['opensource', 'free'], views: 160000, likes: 32000, featured: true, createdAt: '2024-01-01' },
    { id: 'dalle', name: 'DALL-E', url: 'https://openai.com/dall-e-3', description: 'OpenAI开发的AI图像生成模型', category: 'image', subCategory: 'image-gen', tags: ['api'], views: 120000, likes: 22000, featured: false, createdAt: '2024-01-01' },
    { id: 'jimeng', name: '即梦AI', url: 'https://jimeng.jianying.com', description: '抖音出品的AI图片、视频创作工具，已上线4.0文生图模型', category: 'image', subCategory: 'image-gen', tags: ['free'], views: 88000, likes: 15000, featured: true, createdAt: '2024-01-01' },
    { id: 'remove-bg', name: 'Remove.bg', url: 'https://www.remove.bg', description: '强大的AI图片背景移除工具，一键抠图', category: 'image', subCategory: 'image-edit', tags: ['free'], views: 75000, likes: 14000, featured: false, createdAt: '2024-01-01' },
    { id: 'tongyi-wanxiang', name: '通义万相', url: 'https://wanxiang.aliyun.com', description: '阿里云推出的AI创意作画平台，支持文生图、图生图', category: 'image', subCategory: 'image-gen', tags: ['free', 'api'], views: 65000, likes: 11000, featured: false, createdAt: '2024-01-01' },
    { id: 'liblib', name: 'LiblibAI·哩布哩布AI', url: 'https://www.liblib.ai', description: '国内AI绘画原创模型分享社区，覆盖多领域绘画模型', category: 'image', subCategory: 'image-gen', tags: ['free'], views: 58000, likes: 10000, featured: false, createdAt: '2024-01-01' },
    { id: 'civitai', name: 'Civitai社区(C站)', url: 'https://civitai.com', description: '全球知名AI绘画模型分享平台，可上传、分享、下载AI绘画模型', category: 'image', subCategory: 'image-gen', tags: ['free'], views: 95000, likes: 18000, featured: false, createdAt: '2024-01-01' },
    { id: 'sora', name: 'Sora', url: 'https://openai.com/sora', description: 'OpenAI推出的AI文本到视频生成模型，可生成长达一分钟的复杂场景视频', category: 'video', subCategory: 'video-gen', tags: ['api'], views: 280000, likes: 55000, featured: true, createdAt: '2024-01-01' },
    { id: 'keling', name: '可灵AI', url: 'https://klingai.com', description: '快手AI团队自研的图像与视频生成大模型', category: 'video', subCategory: 'video-gen', tags: ['api'], views: 120000, likes: 22000, featured: true, createdAt: '2024-01-01' },
    { id: 'runway', name: 'Runway', url: 'https://runwayml.com', description: '强大的AI视频制作工具，支持绿幕抠像、视频合成、AI编辑等30多种创意工具', category: 'video', subCategory: 'video-edit', tags: ['api'], views: 98000, likes: 18000, featured: false, createdAt: '2024-01-01' },
    { id: 'pika', name: 'Pika', url: 'https://pika.art', description: 'Pika Labs推出的AI视频生成和编辑工具', category: 'video', subCategory: 'video-gen', tags: ['free'], views: 85000, likes: 15000, featured: false, createdAt: '2024-01-01' },
    { id: 'heygen', name: 'HeyGen', url: 'https://www.heygen.com', description: 'AIGC视频创建平台，可生成高保真商业口播视频', category: 'video', subCategory: 'video-avatar', tags: ['api'], views: 72000, likes: 13000, featured: false, createdAt: '2024-01-01' },
    { id: 'vidu', name: 'Vidu AI', url: 'https://www.vidu.ai', description: '北京生数科技与清华大学合作推出的创新视频生成平台', category: 'video', subCategory: 'video-gen', tags: ['api'], views: 62000, likes: 11000, featured: false, createdAt: '2024-01-01' },
    { id: 'coze', name: '扣子(Coze)AI应用平台', url: 'https://www.coze.cn', description: '字节跳动旗下的AI应用平台，支持播客生成、PPT制作、网页开发、报告写作等全场景办公', category: 'office', subCategory: 'ppt', tags: ['free', 'api'], views: 88000, likes: 16000, featured: true, createdAt: '2024-01-01' },
    { id: 'copilot', name: 'Copilot', url: 'https://copilot.microsoft.com', description: '微软推出的AI办公助手，深度集成Office全家桶，企业级搜索与办公效率提升', category: 'office', subCategory: 'ppt', tags: ['api'], views: 130000, likes: 25000, featured: true, createdAt: '2024-01-01' },
    { id: 'aippt', name: 'AiPPT', url: 'https://www.aippt.com', description: 'AI一键自动生成PPT，内置海量精品模板', category: 'office', subCategory: 'ppt', tags: ['free'], views: 72000, likes: 13000, featured: false, createdAt: '2024-01-01' },
    { id: 'processon', name: 'ProcessOn', url: 'https://www.processon.com', description: '在线AI流程图和思维导图制作工具', category: 'office', subCategory: 'mindmap', tags: ['free'], views: 58000, likes: 10000, featured: false, createdAt: '2024-01-01' },
    { id: 'chatdoc', name: 'ChatDOC', url: 'https://chatdoc.com', description: '基于大模型的文档阅读工具，支持文档问答与总结', category: 'office', subCategory: 'doc', tags: ['free'], views: 45000, likes: 8000, featured: false, createdAt: '2024-01-01' },
    { id: 'wps-ai', name: 'WPS AI', url: 'https://ai.wps.cn', description: 'WPS推出的AI办公助手，覆盖文档、表格、PPT全场景办公自动化', category: 'office', subCategory: 'doc', tags: ['free'], views: 85000, likes: 15000, featured: false, createdAt: '2024-01-01' },
    { id: 'tongyi-tingwu', name: '通义听悟', url: 'https://tingwu.aliyun.com', description: '阿里推出的AI会议转录工具，支持实时字幕、翻译、会议纪要生成', category: 'office', subCategory: 'meeting', tags: ['free'], views: 52000, likes: 9000, featured: false, createdAt: '2024-01-01' },
    { id: 'misira', name: '秘塔写作猫', url: 'https://xiezuocat.com', description: 'AI智能写作工具，支持写作、校对、润色、纠错全流程', category: 'writing', subCategory: 'write-assist', tags: ['free'], views: 62000, likes: 11000, featured: false, createdAt: '2024-01-01' },
    { id: 'huoshan', name: '火山写作', url: 'https://huoshan.com/write', description: '字节跳动旗下推出的免费AI写作助手', category: 'writing', subCategory: 'write-assist', tags: ['free'], views: 48000, likes: 8500, featured: false, createdAt: '2024-01-01' },
    { id: 'perplexity', name: 'Perplexity AI', url: 'https://www.perplexity.ai', description: '对话式AI搜索引擎，结合传统索引技术与大模型推理能力', category: 'search', subCategory: 'ai-search', tags: ['free', 'api'], views: 110000, likes: 20000, featured: true, createdAt: '2024-01-01' },
    { id: 'mita', name: '秘塔AI搜索', url: 'https://metaso.cn', description: '无广告AI搜索引擎，可将结果整理成思维导图和报告文档', category: 'search', subCategory: 'ai-search', tags: ['free'], views: 68000, likes: 12000, featured: false, createdAt: '2024-01-01' },
    { id: 'tiangong-search', name: '天工AI搜索', url: 'https://search.tiangong.cn', description: '昆仑万维推出的结合大模型的AI搜索引擎', category: 'search', subCategory: 'ai-search', tags: ['free'], views: 52000, likes: 9000, featured: false, createdAt: '2024-01-01' },
    { id: 'aminer', name: 'AMiner学术搜索', url: 'https://www.aminer.cn', description: 'AI科研智能体平台，整合超3亿篇学术论文与20亿个关系图谱', category: 'search', subCategory: 'academic', tags: ['free'], views: 45000, likes: 8000, featured: false, createdAt: '2024-01-01' },
    { id: 'coze-agent', name: 'Coze AI应用平台', url: 'https://www.coze.cn', description: '字节跳动旗下的AI智能体开发与应用平台，可快速创建、调试和优化AI智能体', category: 'agent', subCategory: 'agent-platform', tags: ['free', 'api'], views: 78000, likes: 14000, featured: true, createdAt: '2024-01-01' },
    { id: 'manus', name: 'Manus', url: 'https://manus.im', description: '中国团队开发的通用型自主AI Agent', category: 'agent', subCategory: 'agent-platform', tags: ['api'], views: 68000, likes: 12000, featured: false, createdAt: '2024-01-01' },
    { id: 'dify', name: 'Dify.AI', url: 'https://dify.ai', description: '用于构建和管理生成式AI应用程序的LLMOps平台', category: 'agent', subCategory: 'agent-framework', tags: ['opensource'], views: 55000, likes: 10000, featured: false, createdAt: '2024-01-01' },
    { id: 'fastgpt', name: 'FastGPT', url: 'https://fastgpt.cn', description: '基于LLM大语言模型的知识库问答系统，支持可视化工作流编排', category: 'agent', subCategory: 'agent-framework', tags: ['opensource', 'free'], views: 48000, likes: 8500, featured: false, createdAt: '2024-01-01' },
    { id: 'suno', name: 'Suno AI', url: 'https://suno.ai', description: 'AI音乐创作辅助平台，可生成完整歌曲与伴奏', category: 'audio', subCategory: 'music', tags: ['free', 'api'], views: 150000, likes: 30000, featured: true, createdAt: '2024-01-01' },
    { id: 'elevenlabs', name: 'ElevenLabs', url: 'https://elevenlabs.io', description: 'AI文本转语音工具，支持包含中文在内的28种语言', category: 'audio', subCategory: 'tts', tags: ['api'], views: 85000, likes: 15000, featured: false, createdAt: '2024-01-01' },
    { id: 'netease-music', name: '网易天音', url: 'https://tianyin.163.com', description: '网易推出的一站式AI音乐创作工具', category: 'audio', subCategory: 'music', tags: ['free'], views: 52000, likes: 9000, featured: false, createdAt: '2024-01-01' },
    { id: 'huoshan-music', name: '海绵音乐AI', url: 'https://hailuoai.com/music', description: '字节跳动推出的AI音乐生成工具，可生成个性化音乐', category: 'audio', subCategory: 'music', tags: ['free'], views: 45000, likes: 8000, featured: false, createdAt: '2024-01-01' },
    { id: 'lalal', name: 'LALAL.AI', url: 'https://www.lalal.ai', description: 'AI人声乐器分离和提取工具', category: 'audio', subCategory: 'audio-edit', tags: ['api'], views: 38000, likes: 7000, featured: false, createdAt: '2024-01-01' },
    { id: 'chuangkit', name: '创客贴AI设计工具', url: 'https://www.chuangkit.com', description: '极简好用的智能在线设计软件，集成AI设计全能力', category: 'design', subCategory: 'ui-design', tags: ['free'], views: 62000, likes: 11000, featured: false, createdAt: '2024-01-01' },
    { id: 'meijian', name: '美间AI', url: 'https://www.meijian.cn', description: '新一代AI画布式创意设计平台，可一键创建场景、修改设计细节', category: 'design', subCategory: 'ui-design', tags: ['free'], views: 48000, likes: 8500, featured: false, createdAt: '2024-01-01' },
    { id: 'logo-ai', name: 'LogoliveryAI', url: 'https://logo.livery.app', description: '免费的AI Logo生成器，提供SVG矢量格式', category: 'design', subCategory: 'logo', tags: ['free'], views: 35000, likes: 6000, featured: false, createdAt: '2024-01-01' },
    { id: 'framera', name: 'Framer AI', url: 'https://www.framer.com', description: 'Framer推出的AI网站自动设计、生成和上线工具', category: 'design', subCategory: 'ui-design', tags: ['api'], views: 55000, likes: 10000, featured: false, createdAt: '2024-01-01' },
    { id: 'spline-ai', name: 'Spline AI', url: 'https://spline.design/ai', description: 'Spline推出的AI生成3D物体、动画、材质工具', category: 'design', subCategory: '3d-design', tags: ['free'], views: 42000, likes: 7500, featured: false, createdAt: '2024-01-01' },
    { id: 'huggingface', name: 'Hugging Face', url: 'https://huggingface.co', description: '全球知名的AI社区，提供开源模型、数据集与开发工具', category: 'community', subCategory: 'model-hub', tags: ['opensource', 'free'], views: 180000, likes: 35000, featured: true, createdAt: '2024-01-01' },
    { id: 'modelscope', name: '魔搭社区ModelScope', url: 'https://www.modelscope.cn', description: '阿里达摩院推出的以模型为中心的模型开源社区', category: 'community', subCategory: 'model-hub', tags: ['opensource', 'free'], views: 95000, likes: 18000, featured: false, createdAt: '2024-01-01' },
    { id: 'siliconcloud', name: 'SiliconCloud 硅基流动', url: 'https://siliconflow.cn', description: '一站式大模型API平台，提供多种顶尖开源大模型的API服务', category: 'community', subCategory: 'model-hub', tags: ['api'], views: 72000, likes: 13000, featured: false, createdAt: '2024-01-01' },
    { id: 'lm-studio', name: 'LM Studio', url: 'https://lmstudio.ai', description: '本地大语言模型运行软件，用户友好的图形界面，支持多种开源模型', category: 'community', subCategory: 'model-hub', tags: ['opensource', 'free'], views: 85000, likes: 16000, featured: false, createdAt: '2024-01-01' },
    { id: 'ollama', name: 'Ollama', url: 'https://ollama.com', description: '本地运行Llama和其他开源大语言模型的工具', category: 'community', subCategory: 'model-hub', tags: ['opensource', 'free'], views: 98000, likes: 19000, featured: false, createdAt: '2024-01-01' },
    { id: 'autodl', name: 'AutoDL AI算力云', url: 'https://www.autodl.com', description: '专业的GPU租用服务，秒级计费、稳定好用', category: 'compute', subCategory: 'gpu-cloud', tags: ['api'], views: 68000, likes: 12000, featured: false, createdAt: '2024-01-01' },
    { id: 'feizhu', name: '飞桨AI Studio星河社区', url: 'https://aistudio.baidu.com', description: '集开放数据、开源算法、免费算力三位一体的开发者平台', category: 'compute', subCategory: 'gpu-cloud', tags: ['free'], views: 55000, likes: 10000, featured: false, createdAt: '2024-01-01' },
    { id: 'google-colab', name: 'Google Colab', url: 'https://colab.research.google.com', description: '谷歌开放的机器学习研究工具，提供免费GPU使用', category: 'compute', subCategory: 'gpu-cloud', tags: ['free'], views: 120000, likes: 22000, featured: false, createdAt: '2024-01-01' },
    { id: 'qibozhi', name: '智源社区', url: 'https://www.z.ai', description: '北京智源人工智能研究院打造的官方社区，分享全球AI前沿论文与技术动态', category: 'news', subCategory: 'news', tags: ['free'], views: 42000, likes: 7500, featured: false, createdAt: '2024-01-01' },
    { id: 'liangzi', name: '量子位', url: 'https://www.qbitai.com', description: '追踪人工智能新趋势，报道科技行业新突破', category: 'news', subCategory: 'news', tags: ['free'], views: 48000, likes: 8500, featured: false, createdAt: '2024-01-01' },
    { id: 'machine-hart', name: '机器之心', url: 'https://jiqizhixin.com', description: '国内领先的前沿科技媒体和产业服务平台', category: 'news', subCategory: 'news', tags: ['free'], views: 52000, likes: 9000, featured: false, createdAt: '2024-01-01' },
    { id: 'deepl-translate', name: 'DeepL翻译', url: 'https://www.deepl.com/translator', description: '全球知名的人工智能翻译工具，翻译精准度高', category: 'translation', subCategory: 'translate', tags: ['free', 'api'], views: 130000, likes: 25000, featured: true, createdAt: '2024-01-01' },
    { id: 'immersive-translate', name: '沉浸式翻译', url: 'https://immersivetranslate.com', description: '双语对照网页翻译插件，免费支持PDF、EPUB、视频字幕翻译', category: 'translation', subCategory: 'translate', tags: ['free'], views: 85000, likes: 16000, featured: false, createdAt: '2024-01-01' },
    { id: 'tongyi-farui', name: '通义法睿', url: 'https://farui.aliyun.com', description: '阿里推出的免费AI法律顾问助手', category: 'legal', subCategory: 'legal-assist', tags: ['free'], views: 35000, likes: 6000, featured: false, createdAt: '2024-01-01' },
    { id: 'faxingbao', name: '法行宝', url: 'https://www.faxingbao.com', description: '百度推出的免费AI法律助手', category: 'legal', subCategory: 'legal-assist', tags: ['free'], views: 32000, likes: 5500, featured: false, createdAt: '2024-01-01' },
    { id: 'chatlaw', name: 'ChatLaw', url: 'https://chatlaw.cn', description: '北大开源的法律大模型和助手', category: 'legal', subCategory: 'legal-assist', tags: ['opensource', 'free'], views: 38000, likes: 6500, featured: false, createdAt: '2024-01-01' },
    { id: 'gptzero', name: 'GPTZero', url: 'https://gptzero.me', description: '准确检测AI抄袭的工具，可标注AI生成的句子与整体占比', category: 'detection', subCategory: 'text-detect', tags: ['free'], views: 55000, likes: 10000, featured: false, createdAt: '2024-01-01' },
    { id: 'originality', name: 'Originality.AI', url: 'https://originality.ai', description: '原创度和AI内容检测工具', category: 'detection', subCategory: 'text-detect', tags: ['api'], views: 42000, likes: 7500, featured: false, createdAt: '2024-01-01' },
    { id: 'agent-qa', name: 'agent-qa', url: 'https://vostride.com', description: '自然语言网页与移动端QA，持久记忆与经验证的自我改进。', category: 'other', subCategory: 'other', tags: [], views: 0, likes: 0, featured: false, createdAt: '2026-11-08' },
    { id: '302ai', name: '302.AI', url: 'https://302.ai', description: '汇集全球顶级AI的自助平台，按需付费，零门槛使用', category: 'other', subCategory: 'other', tags: ['api'], views: 48000, likes: 8500, featured: false, createdAt: '2024-01-01' },
    { id: 'flowgpt', name: 'FlowGPT', url: 'https://flowgpt.com', description: 'ChatGPT指令大全分享平台', category: 'other', subCategory: 'other', tags: ['free'], views: 62000, likes: 11000, featured: false, createdAt: '2024-01-01' },
    { id: 'promptperfect', name: 'PromptPerfect', url: 'https://promptperfect.jina.ai', description: '专业的提示词优化工具', category: 'other', subCategory: 'other', tags: ['api'], views: 35000, likes: 6000, featured: false, createdAt: '2024-01-01' }
];

let currentCategory = 'all';
let currentTag = 'all';
let currentSort = 'default';
let searchQuery = '';
let searchHistory = [];

const searchInput = document.getElementById('searchInput');
const searchSuggestions = document.getElementById('searchSuggestions');
const categoryTabs = document.getElementById('categoryTabs');
const filterTags = document.getElementById('filterTags');
const filterSort = document.getElementById('filterSort');
const toolsGrid = document.getElementById('toolsGrid');
const categoriesGrid = document.getElementById('categoriesGrid');
const resultsCount = document.getElementById('resultsCount');
const noResults = document.getElementById('noResults');
const menuToggle = document.getElementById('menuToggle');
const mobileNav = document.getElementById('mobileNav');
const resetFilters = document.getElementById('resetFilters');
const currentSectionTitle = document.getElementById('currentSectionTitle');

function getCategoryName(categoryId) {
    const category = categories.find(c => c.id === categoryId);
    return category ? category.name : categoryId;
}

function getCategoryIcon(categoryId) {
    const category = categories.find(c => c.id === categoryId);
    return category ? category.icon : '🔧';
}

function formatNumber(num) {
    if (num >= 1000) {
        return (num / 1000).toFixed(1) + 'k';
    }
    return num.toString();
}

function filterTools() {
    let filtered = [...tools];

    if (currentCategory !== 'all') {
        filtered = filtered.filter(tool => tool.category === currentCategory);
    }

    if (currentTag !== 'all') {
        filtered = filtered.filter(tool => tool.tags.includes(currentTag));
    }

    if (searchQuery) {
        const query = searchQuery.toLowerCase();
        filtered = filtered.filter(tool =>
            tool.name.toLowerCase().includes(query) ||
            tool.description.toLowerCase().includes(query) ||
            tool.tags.some(tag => tag.toLowerCase().includes(query))
        );
    }

    if (currentSort === 'views') {
        filtered.sort((a, b) => b.views - a.views);
    } else if (currentSort === 'latest') {
        filtered.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    } else {
        filtered.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    }

    return filtered;
}

function renderTools() {
    const filtered = filterTools();

    resultsCount.textContent = `共 ${filtered.length} 个工具`;

    if (filtered.length === 0) {
        toolsGrid.innerHTML = '';
        noResults.style.display = 'block';
        return;
    }

    noResults.style.display = 'none';

    toolsGrid.innerHTML = filtered.map(tool => `
        <article class="tool-card" data-id="${tool.id}" onclick="handleToolClick('${tool.url}')">
            <div class="tool-card-header">
                <span class="tool-category-badge">${getCategoryIcon(tool.category)} ${getCategoryName(tool.category)}</span>
                <img class="tool-favicon" src="https://www.google.com/s2/favicons?domain=${new URL(tool.url).hostname}&sz=64" alt="${tool.name}" onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22%3E%3Ctext y=%22.9em%22 font-size=%2280%22%3E${getCategoryIcon(tool.category)}%3C/text%3E%3C/svg%3E'">
            </div>
            <div class="tool-card-body">
                <h3 class="tool-name">${tool.name}</h3>
                <p class="tool-description">${tool.description}</p>
                <div class="tool-tags">
                    ${tool.tags.map(tag => `<span class="tool-tag ${tag}">${tag === 'free' ? '免费' : tag === 'api' ? 'API' : tag === 'opensource' ? '开源' : tag}</span>`).join('')}
                </div>
            </div>
            <div class="tool-card-footer">
                <div class="tool-meta">
                    <span>👁 ${formatNumber(tool.views)}</span>
                    <span>❤️ ${formatNumber(tool.likes)}</span>
                </div>
                <button class="tool-action" onclick="event.stopPropagation(); handleToolAction('${tool.id}')">访问</button>
            </div>
        </article>
    `).join('');
}

function renderCategories() {
    categoriesGrid.innerHTML = categories.map(cat => `
        <div class="category-card" onclick="handleCategoryClick('${cat.id}')">
            <div class="category-card-header">
                <div class="category-icon">${cat.icon}</div>
                <div class="category-info">
                    <h3>${cat.name}</h3>
                    <p>${cat.description}</p>
                </div>
            </div>
            <div class="category-card-body">
                ${cat.subCategories.map(sub => `
                    <span class="category-item">${sub.name}</span>
                `).join('')}
            </div>
        </div>
    `).join('');
}

function handleToolClick(url) {
    window.open(url, '_blank');
}

function handleToolAction(id) {
    const tool = tools.find(t => t.id === id);
    if (tool) {
        window.open(tool.url, '_blank');
    }
}

function handleCategoryClick(categoryId) {
    currentCategory = categoryId;
    updateCategoryTabs();
    renderTools();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function updateCategoryTabs() {
    categoryTabs.querySelectorAll('.category-tab').forEach(tab => {
        tab.classList.toggle('active', tab.dataset.category === currentCategory);
    });

    if (currentCategory === 'all') {
        currentSectionTitle.textContent = '精选推荐';
    } else {
        currentSectionTitle.textContent = getCategoryIcon(currentCategory) + ' ' + getCategoryName(currentCategory);
    }
}

function handleSearch(query) {
    searchQuery = query.trim();
    renderTools();

    if (searchQuery && !searchHistory.includes(searchQuery)) {
        searchHistory.unshift(searchQuery);
        if (searchHistory.length > 10) {
            searchHistory.pop();
        }
    }
}

function renderSearchSuggestions(query) {
    if (!query) {
        if (searchHistory.length > 0) {
            searchSuggestions.innerHTML = `
                <div class="suggestion-header">搜索历史</div>
                ${searchHistory.slice(0, 5).map(term => `
                    <div class="suggestion-item" onclick="handleSearch('${term}')">
                        <span>🕐</span>
                        <span class="tool-name">${term}</span>
                    </div>
                `).join('')}
            `;
            searchSuggestions.classList.add('active');
        }
        return;
    }

    const matches = tools.filter(tool =>
        tool.name.toLowerCase().includes(query.toLowerCase()) ||
        tool.description.toLowerCase().includes(query.toLowerCase())
    ).slice(0, 8);

    if (matches.length === 0) {
        searchSuggestions.classList.remove('active');
        return;
    }

    searchSuggestions.innerHTML = matches.map(tool => `
        <div class="suggestion-item" onclick="handleSearch('${tool.name}')">
            <img class="tool-icon" src="https://www.google.com/s2/favicons?domain=${new URL(tool.url).hostname}&sz=32" alt="${tool.name}" onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22%3E%3Ctext y=%22.9em%22 font-size=%2280%22%3E${getCategoryIcon(tool.category)}%3C/text%3E%3C/svg%3E'">
            <span class="tool-name">${tool.name}</span>
            <span class="tool-category">${getCategoryIcon(tool.category)} ${getCategoryName(tool.category)}</span>
        </div>
    `).join('');
    searchSuggestions.classList.add('active');
}

function showToast(message) {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => {
        toast.classList.remove('show');
    }, 2500);
}

let searchTimeout;
searchInput.addEventListener('input', (e) => {
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(() => {
        renderSearchSuggestions(e.target.value);
    }, 300);
});

searchInput.addEventListener('focus', () => {
    if (searchInput.value) {
        renderSearchSuggestions(searchInput.value);
    } else if (searchHistory.length > 0) {
        renderSearchSuggestions('');
    }
});

document.addEventListener('click', (e) => {
    if (!e.target.closest('.search-container')) {
        searchSuggestions.classList.remove('active');
    }
});

searchInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        handleSearch(searchInput.value);
        searchSuggestions.classList.remove('active');
    }
});

categoryTabs.addEventListener('click', (e) => {
    if (e.target.classList.contains('category-tab')) {
        currentCategory = e.target.dataset.category;
        updateCategoryTabs();
        renderTools();
    }
});

filterTags.addEventListener('click', (e) => {
    if (e.target.classList.contains('filter-tag')) {
        currentTag = e.target.dataset.tag;
        filterTags.querySelectorAll('.filter-tag').forEach(tag => {
            tag.classList.toggle('active', tag.dataset.tag === currentTag);
        });
        renderTools();
    }
});

filterSort.addEventListener('change', (e) => {
    currentSort = e.target.value;
    renderTools();
});

menuToggle.addEventListener('click', () => {
    mobileNav.classList.toggle('active');
});

resetFilters.addEventListener('click', () => {
    currentCategory = 'all';
    currentTag = 'all';
    currentSort = 'default';
    searchQuery = '';
    searchInput.value = '';

    updateCategoryTabs();
    filterTags.querySelectorAll('.filter-tag').forEach(tag => {
        tag.classList.toggle('active', tag.dataset.tag === 'all');
    });
    filterSort.value = 'default';

    renderTools();
    showToast('筛选条件已重置');
});

document.querySelectorAll('.mobile-nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const category = link.dataset.category;
        if (category) {
            handleCategoryClick(category);
        }
        mobileNav.classList.remove('active');
    });
});

document.querySelectorAll('.nav-desktop .nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const category = link.dataset.category;
        if (category) {
            handleCategoryClick(category);
        }
    });
});

document.querySelectorAll('.footer-links a[data-category]').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const category = link.dataset.category;
        if (category) {
            handleCategoryClick(category);
        }
    });
});

document.querySelector('.search-btn').addEventListener('click', () => {
    handleSearch(searchInput.value);
    searchSuggestions.classList.remove('active');
});

renderTools();
renderCategories();
