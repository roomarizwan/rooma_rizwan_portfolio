import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import schemas  from './schemas/schema'

export default defineConfig({
  name: 'default',
  title: 'rooma_portfolio',

  projectId: 'j63donai',
  dataset: 'production',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemas,
  },
})
