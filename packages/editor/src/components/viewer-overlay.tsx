'use client'

import { Icon } from '@iconify/react'
import {
  type AnyNode,
  type AnyNodeId,
  type BuildingNode,
  emitter,
  type LevelNode,
  useScene,
  type ZoneNode,
} from '@pascal-app/core'
import { useViewer } from '@pascal-app/viewer'
import { ArrowLeft, Camera, ChevronRight, Diamond, Footprints, Layers, Moon, Sun } from 'lucide-react'
import { motion } from 'motion/react'
import Link from 'next/link'
import { cn } from '../lib/utils'
import useEditor from '../store/use-editor'
import { ActionButton } from './ui/action-menu/action-button'
import { TooltipProvider } from './ui/primitives/tooltip'
