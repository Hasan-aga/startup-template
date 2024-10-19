import SparklesText from "@/components/ui/sparkles-text";
export default function Title({ text }) {
  return (
    <h2 className="text-4xl font-bold text-center text-gray-800">
      <SparklesText text={text} />
    </h2>
  );
}
