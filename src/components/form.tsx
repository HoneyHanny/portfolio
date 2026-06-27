import * as z from "zod"
import { Controller, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import { Button } from "./ui/button"
import { ArrowRight } from "lucide-react"
import { Field, FieldError, FieldGroup, FieldLabel } from "./ui/field"

const formSchema = z.object({
  name: z.string(),
  email: z.email(),
  message: z.string(),
})

export function Form() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  })

  function onSubmit(data: z.infer<typeof formSchema>) {
    console.log(data)
  }

  return (
    <form
      id="form"
      className="flex w-full flex-col gap-4 lg:w-full"
      onSubmit={form.handleSubmit(onSubmit)}
    >
      <FieldGroup>
        <Controller
          name="name"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="name">Your Name</FieldLabel>
              <Input
                {...field}
                type="text"
                id="name"
                aria-invalid={fieldState.invalid}
                placeholder="John Doe"
                autoComplete="name"
                className="focus-visible:border-red-500 focus-visible:ring-1 focus-visible:ring-red-500"
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        <Controller
          name="email"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="email">Email Address</FieldLabel>
              <Input
                {...field}
                type="text"
                id="email"
                aria-invalid={fieldState.invalid}
                placeholder="john@example.com"
                autoComplete="email"
                className="focus-visible:border-red-500 focus-visible:ring-1 focus-visible:ring-red-500"
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        <Controller
          name="message"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="message">Email Address</FieldLabel>
              <Textarea
                {...field}
                id="message"
                aria-invalid={fieldState.invalid}
                placeholder="Tell me about your project..."
                className="h-32 focus-visible:border-red-500 focus-visible:ring-1 focus-visible:ring-red-500"
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
      </FieldGroup>

      <Field>
        <Button
          form="form"
          className="transition-all-duration-300 inline-flex h-9 items-center justify-center gap-2 bg-[#ff3333] px-4 text-sm font-medium text-white shadow-lg shadow-red-500/20 hover:bg-red-600 hover:shadow-red-500/40 focus-visible:border-red-500 focus-visible:ring-red-500"
          type="submit"
        >
          Send Message <ArrowRight />
        </Button>
      </Field>
    </form>
  )
}

export default Form
