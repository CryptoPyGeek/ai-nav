const categories = [
    {
        id: 'chat',
        name: '聊天AI',
        icon: '💬',
        description: '对话式 AI 工具',
        subCategories: [
            { id: 'assistant', name: '对话助手' },
            { id: 'coder', name: '编程助手' },
            { id: 'agent', name: 'AI Agent' },
            { id: 'document', name: '文档助手' }
        ]
    },
    {
        id: 'image',
        name: '图像AI',
        icon: '🎨',
        description: '图像生成与处理',
        subCategories: [
            { id: 'painting', name: 'AI绘画' },
            { id: 'editor', name: '图像编辑' },
            { id: 'logo', name: 'Logo设计' },
            { id: 'vision', name: '图像识别' }
        ]
    },
    {
        id: 'video',
        name: '视频AI',
        icon: '🎬',
        description: '视频生成与编辑',
        subCategories: [
            { id: 'generate', name: '视频生成' },
            { id: 'edit', name: '视频编辑' },
            { id: 'avatar', name: '虚拟形象' }
        ]
    },
    {
        id: 'audio',
        name: '音频AI',
        icon: '🎵',
        description: '语音合成与识别',
        subCategories: [
            { id: 'tts', name: '语音合成' },
            { id: 'stt', name: '语音识别' },
            { id: 'music', name: '音乐生成' }
        ]
    },
    {
        id: 'tools',
        name: '工具',
        icon: '🔧',
        description: '开发者和效率工具',
        subCategories: [
            { id: 'dev', name: '开发工具' },
            { id: 'productivity', name: '效率工具' },
            { id: 'enterprise', name: '企业服务' }
        ]
    }
];

const tools = [
    {
        id: 'chatgpt',
        name: 'ChatGPT',
        url: 'https://chat.openai.com',
        description: 'OpenAI 开发的大型语言模型，支持多轮对话和复杂任务处理',
        category: 'chat',
        subCategory: 'assistant',
        tags: ['free', 'api'],
        views: 15420,
        likes: 2340,
        featured: true,
        createdAt: '2024-01-15'
    },
    {
        id: 'claude',
        name: 'Claude',
        url: 'https://claude.ai',
        description: 'Anthropic 开发的 AI 助手，擅长分析、写作和编程辅助',
        category: 'chat',
        subCategory: 'assistant',
        tags: ['free', 'api'],
        views: 12350,
        likes: 1890,
        featured: true,
        createdAt: '2024-02-20'
    },
    {
        id: 'gemini',
        name: 'Gemini',
        url: 'https://gemini.google.com',
        description: 'Google 开发的 AI 助手，集成了搜索和多种 Google 服务',
        category: 'chat',
        subCategory: 'assistant',
        tags: ['free', 'api'],
        views: 9870,
        likes: 1456,
        featured: false,
        createdAt: '2024-03-10'
    },
    {
        id: 'copilot',
        name: 'GitHub Copilot',
        url: 'https://github.com/features/copilot',
        description: 'AI 编程助手，提供代码补全、生成和解释功能',
        category: 'chat',
        subCategory: 'coder',
        tags: ['api'],
        views: 18230,
        likes: 3200,
        featured: true,
        createdAt: '2024-01-08'
    },
    {
        id: 'cursor',
        name: 'Cursor',
        url: 'https://cursor.sh',
        description: '基于 AI 的代码编辑器，深度集成 GPT-4',
        category: 'chat',
        subCategory: 'coder',
        tags: ['free', 'opensource'],
        views: 8760,
        likes: 1230,
        featured: true,
        createdAt: '2024-02-15'
    },
    {
        id: 'midjourney',
        name: 'Midjourney',
        url: 'https://midjourney.com',
        description: '强大的 AI 绘画工具，通过文本描述生成精美图像',
        category: 'image',
        subCategory: 'painting',
        tags: ['api'],
        views: 25680,
        likes: 4500,
        featured: true,
        createdAt: '2024-01-20'
    },
    {
        id: 'stable-diffusion',
        name: 'Stable Diffusion',
        url: 'https://stability.ai',
        description: '开源的 AI 图像生成模型，支持本地部署',
        category: 'image',
        subCategory: 'painting',
        tags: ['free', 'opensource'],
        views: 21340,
        likes: 3890,
        featured: true,
        createdAt: '2024-01-12'
    },
    {
        id: 'dalle',
        name: 'DALL-E',
        url: 'https://openai.com/dall-e-3',
        description: 'OpenAI 开发的 AI 图像生成模型',
        category: 'image',
        subCategory: 'painting',
        tags: ['api'],
        views: 15670,
        likes: 2780,
        featured: false,
        createdAt: '2024-02-01'
    },
    {
        id: 'remove-bg',
        name: 'Remove.bg',
        url: 'https://remove.bg',
        description: 'AI 驱动的背景移除工具，一键去除图片背景',
        category: 'image',
        subCategory: 'editor',
        tags: ['free'],
        views: 9870,
        likes: 1560,
        featured: false,
        createdAt: '2024-01-25'
    },
    {
        id: 'sora',
        name: 'Sora',
        url: 'https://openai.com/sora',
        description: 'OpenAI 开发的 AI 视频生成模型，可根据文本描述创建视频',
        category: 'video',
        subCategory: 'generate',
        tags: ['api'],
        views: 34560,
        likes: 5600,
        featured: true,
        createdAt: '2024-02-10'
    },
    {
        id: 'runway',
        name: 'Runway',
        url: 'https://runwayml.com',
        description: 'AI 驱动的视频编辑和生成平台',
        category: 'video',
        subCategory: 'edit',
        tags: ['free', 'api'],
        views: 12340,
        likes: 1980,
        featured: false,
        createdAt: '2024-01-30'
    },
    {
        id: 'heygen',
        name: 'HeyGen',
        url: 'https://heygen.com',
        description: 'AI 虚拟形象视频生成平台，快速创建数字人视频',
        category: 'video',
        subCategory: 'avatar',
        tags: ['api'],
        views: 8760,
        likes: 1340,
        featured: false,
        createdAt: '2024-02-25'
    },
    {
        id: 'elevenlabs',
        name: 'ElevenLabs',
        url: 'https://elevenlabs.io',
        description: 'AI 语音合成平台，提供逼真的文本转语音服务',
        category: 'audio',
        subCategory: 'tts',
        tags: ['free', 'api'],
        views: 11230,
        likes: 1870,
        featured: true,
        createdAt: '2024-01-18'
    },
    {
        id: 'whisper',
        name: 'Whisper',
        url: 'https://openai.com/whisper',
        description: 'OpenAI 开源的语音识别模型，支持多语言转录',
        category: 'audio',
        subCategory: 'stt',
        tags: ['free', 'opensource'],
        views: 9870,
        likes: 1670,
        featured: false,
        createdAt: '2024-02-05'
    },
    {
        id: 'suno',
        name: 'Suno',
        url: 'https://suno.ai',
        description: 'AI 音乐生成工具，可以根据描述创作歌曲',
        category: 'audio',
        subCategory: 'music',
        tags: ['free', 'api'],
        views: 18970,
        likes: 3200,
        featured: true,
        createdAt: '2024-03-01'
    },
    {
        id: 'notion-ai',
        name: 'Notion AI',
        url: 'https://notion.so',
        description: '集成在 Notion 中的 AI 写作助手',
        category: 'chat',
        subCategory: 'document',
        tags: ['api'],
        views: 7650,
        likes: 1120,
        featured: false,
        createdAt: '2024-02-12'
    },
    {
        id: 'looka',
        name: 'Looka',
        url: 'https://looka.com',
        description: 'AI Logo 设计工具，快速生成品牌标识',
        category: 'image',
        subCategory: 'logo',
        tags: ['free'],
        views: 6540,
        likes: 980,
        featured: false,
        createdAt: '2024-01-22'
    },
    {
        id: 'perplexity',
        name: 'Perplexity',
        url: 'https://perplexity.ai',
        description: 'AI 驱动的搜索引擎，直接回答用户问题',
        category: 'chat',
        subCategory: 'assistant',
        tags: ['free', 'api'],
        views: 13450,
        likes: 2100,
        featured: true,
        createdAt: '2024-02-28'
    }
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
                    ${tool.tags.map(tag => `<span class="tool-tag ${tag}">${tag === 'free' ? '免费' : tag === 'api' ? 'API' : '开源'}</span>`).join('')}
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
