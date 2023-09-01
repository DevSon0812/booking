export const routes = {
    HOME: '/dashboard',

    PRODUCTS: '/dashboard/products/management',
    NEW_PRODUCT: '/dashboard/products/new',
    EDIT_PRODUCT: '/dashboard/products/edit/[id]',
    PRODUCT_CATEGORIES: '/dashboard/products/categories',

    BLOGS: '/dashboard/blogs/management',
    NEW_BLOG: '/dashboard/blogs/new',
    EDIT_BLOG: '/dashboard/blogs/edit/[id]',
    BLOG_CATEGORIES: '/dashboard/blogs/categories',

    ORDERS: '/dashboard/orders',

    LOGIN: '/auth/login',
} as const;
