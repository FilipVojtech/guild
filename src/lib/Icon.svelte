<script lang='ts'>
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';

	export let icon: string;
	export let shape: 'triangle' | 'equilateral' | 'circle' | 'square' | 'hexagon' | 'octagon' | 'none' = 'none';
	export let thickness: 'thin' | 'normal' | 'wide' | 'none' = 'normal';
	export let style: 'outline' | 'solid' | 'prohibited' | 'none' = 'solid';
	export let direction: 'up' | 'right' | 'down' | 'left' | 'none' = 'up';
	export let effect: 'flip-h' | 'flip-v' | 'spin' | 'pulse' | 'none' = 'none';
	export let size: 'tiny' | 'xs' |
		'small' | 's' |
		'medium' | 'm' |
		'large' | 'l' |
		'larger' | 'xl' |
		'huge' | 'xxl' |
		'2x' | '3x' | '4x' | '5x' | '6x' | '7x' | '8x' | '9x';
	size = 'larger';
	export let color: string = 'inherit';

	onMount(() => {
		if (browser) {
			friconix_update();
		}
	});

	function getShape() {
		switch (shape) {
			case 'triangle':
			case 'equilateral':
			case 'circle':
			case 'square':
			case 'hexagon':
			case 'octagon':
				return shape[0];
			case 'none':
			default:
				return 'x';
		}
	}

	function getThickness() {
		switch (thickness) {
			case 'thin':
			case 'wide':
				return thickness[0];
			case 'none':
				return 'x';
			case 'normal':
			default:
				return 'n';
		}
	}

	function getStyle() {
		switch (style) {
			case 'outline':
				return 'l';
			case 'prohibited':
				return 'p';
			case 'none':
				return 'x';
			case 'solid':
			default:
				return 's';
		}
	}

	function getDirection() {
		switch (direction) {
			case 'right':
			case 'down':
			case 'left':
				return direction[0];
			case 'none':
				return 'x';
			case 'up':
			default:
				return 'u';
		}
	}

	function getEffect() {
		switch (effect) {
			case 'flip-h':
				return 'h';
			case 'flip-v':
				return 'v';
			case 'spin':
			case 'pulse':
				return effect[0];
			case 'none':
			default:
				return 'x';
		}
	}

	function getSize() {
		switch (size) {
			case 'tiny' | 'xs':
				return 't';
			case 'small' | 's':
			case 'medium' | 'm':
			case 'large' | 'l':
			case '2x' | '3x' | '4x' | '5x' | '6x' | '7x' | '8x' | '9x':
				return size[0];
			case 'huge' | 'xxl':
				return 'h';
			case 'larger' | 'xl':
			default:
				return 'x';
		}
	}
</script>

<i
	class='fi-{getShape()}{getThickness()}{getStyle()}{getDirection()}{getEffect()}{getSize()}-{icon}'
	style='color: {color}'
></i>
