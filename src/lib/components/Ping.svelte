<script lang="ts">
let {
    color = 'bg-sky-400',
    className,
    ...rest
} : {
    color?: string;
    className?: string;
} = $props();
</script>

<span class="relative flex size-3 {className}" {...rest}>
  <span class="absolute inline-flex h-full w-full animate-ping rounded-full {color} opacity-75"></span>
  <span class="relative inline-flex size-3 rounded-full {color}"></span>
</span>