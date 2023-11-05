<template>
  <div class="ur-toolbar">
    <div class="ur-toolbar__row">
      <div class="btn-group">
        <template v-for="tool in tools" :key="tool.name">
          <div v-if="tool === 'separator'" class="ur-toolbar__separator btn -secondary" />
          <component
            v-else
            :is="tool.items ? 'unrest-dropdown' : 'div'"
            @click="tool.click"
            :items="tool.items"
            :title="tool.name"
            :class="tool.class"
            :id="tool.id"
          >
            <i :class="tool.icon" />
          </component>
        </template>
        <slot name="buttons" />
      </div>
      <slot name="right" />
    </div>
    <div class="ur-toolbar__row btn-group" v-if="selected_tool?.children">
      <div
        v-for="child in selected_tool.children"
        :key="child.slug"
        @click="child.click"
        :class="child.class"
        :title="child.slug"
      >
        <i :class="child.icon" />
      </div>
    </div>
    <slot />
  </div>
</template>

<script>
export default {
  name: 'UnrestToolbar',
  props: {
    storage: Object,
  },
  computed: {
    tools() {
      return this.storage.listTools()
    },
    selected_tool() {
      const { tool, variant } = this.storage.state.selected
      if (variant) {
        return this.tools.find((t) => t.slug === tool && t.variants.includes(variant))
      }
      return this.tools.find((t) => t.slug === tool)
    },
  },
}
</script>
