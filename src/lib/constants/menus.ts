import { Menu } from '@src/types/Menu';

export const menus: Menu[] = [
    { id: 0, label: 'Home', url: '/', isActive: true, isDefault: true },
    { id: 1, label: 'Items1', url: '/items-1', isActive: false, isDefault: false },
    { id: 2, label: 'Items2', url: '/items-2', isActive: false, isDefault: false },
    { id: 3, label: 'Items3', url: '/items-3', isActive: false, isDefault: false },
    { id: 4, label: 'Items4', url: '/items-4', isActive: false, isDefault: false },
];