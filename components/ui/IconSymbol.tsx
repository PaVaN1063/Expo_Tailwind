// This file is a fallback for using MaterialIcons on Android and web.

import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { SymbolWeight } from 'expo-symbols';
import React from 'react';
import { OpaqueColorValue, StyleProp, ViewStyle } from 'react-native';

// Add your SFSymbol to MaterialIcons mappings here.
const MAPPING = {
  'house.fill': 'home',
  'house': 'home-outlined',
  'gear': 'settings',
  'gearshape.fill': 'settings',
  'bell': 'notifications-none',
  'bell.fill': 'notifications',
  'magnifyingglass': 'search',
  'person': 'person-outline',
  'person.fill': 'person',
  'person.2': 'group',
  'person.crop.circle': 'account-circle',
  'arrow.right': 'arrow-forward',
  'arrow.left': 'arrow-back',
  'arrow.up': 'arrow-upward',
  'arrow.down': 'arrow-downward',
  'xmark': 'close',
  'checkmark': 'check',
  'plus': 'add',
  'minus': 'remove',
  'trash': 'delete',
  'pencil': 'edit',
  'square.and.pencil': 'edit-square',

  'play.fill': 'play-arrow',
  'pause.fill': 'pause',
  'stop.fill': 'stop',
  'forward.fill': 'fast-forward',
  'backward.fill': 'fast-rewind',
  'speaker.wave.3.fill': 'volume-up',
  'speaker.slash.fill': 'volume-off',


  'doc.text': 'description',
  'folder': 'folder',
  'folder.fill': 'folder-open',
  'paperplane': 'send',
  'paperplane.fill': 'send',
  'bookmark': 'bookmark-border',
  'bookmark.fill': 'bookmark',
  'star': 'star-border',
  'star.fill': 'star',


  'chevron.right': 'chevron-right',
  'chevron.left': 'chevron-left',
  'chevron.up': 'expand-less',
  'chevron.down': 'expand-more',
  'ellipsis': 'more-horiz',
  'ellipsis.vertical': 'more-vert',
  'line.horizontal.3': 'menu',


  'bubble.left': 'chat-bubble-outline',
  'bubble.left.fill': 'chat-bubble',
  'phone': 'phone',
  'envelope': 'mail-outline',
  'envelope.fill': 'mail',


  'exclamationmark.triangle': 'warning',
  'lock': 'lock-outline',
  'lock.fill': 'lock',
  'eye': 'visibility',
  'eye.slash': 'visibility-off',
  'info.circle': 'info-outline',
  'questionmark.circle': 'help-outline',

  'calendar': 'calendar-today',
  'camera': 'photo-camera',
  'camera.fill': 'photo-camera',
  'photo': 'image',
  'map': 'map',
  'location': 'location-on',
  'location.fill': 'location-searching',
  'heart': 'favorite-border',
  'heart.fill': 'favorite',
  'flag': 'flag',
  'tag': 'local-offer',
  'globe': 'public',
  'clock': 'access-time',
  'battery.100': 'battery-full',
  'battery.25': 'battery-20',
  'wifi': 'wifi',
  'wifi.slash': 'wifi-off',
} as unknown as Partial<
  Record<
    import('expo-symbols').SymbolViewProps['name'],
    React.ComponentProps<typeof MaterialIcons>['name']
  >
>;

export type IconSymbolName = keyof typeof MAPPING;

/**
 * An icon component that uses native SFSymbols on iOS, and MaterialIcons on Android and web. This ensures a consistent look across platforms, and optimal resource usage.
 *
 * Icon `name`s are based on SFSymbols and require manual mapping to MaterialIcons.
 */
export function IconSymbol({
  name,
  size = 24,
  color,
  style,
}: {
  name: IconSymbolName;
  size?: number;
  color: string | OpaqueColorValue;
  style?: StyleProp<ViewStyle>;
  weight?: SymbolWeight;
}) {
  return <MaterialIcons color={color} size={size} name={MAPPING[name]} style={style} />;
}
