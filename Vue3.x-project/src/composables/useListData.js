import { ref } from "vue";
function useListData() {
	const messages = ref([
		{ id: 1, content: "这是一个bug1" },
		{ id: 2, content: "这是一个bug2" },
		{ id: 3, content: "这是一个bug3" },
		{ id: 4, content: "这是一个bug4" },
	]);
	function removeMessage(id) {
		// 当点击的id和messages的id相等时，则删除，不想等满足filter条件，则保留
		messages.value = messages.value.filter((msg) => msg.id !== id);
	}
	return { messages, removeMessage };
}
export default useListData;
