'use client'
import { Button } from '@/components/ui/button'
import { X } from 'lucide-react'
import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { RadioGroup } from './ui/radio-group'
import { WeekFrequencyRadioGroup } from './week-frequency-radio-group'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { createGoal } from '@/actions/create-goal'
import { useRef } from 'react'

const createGoalSchema = z.object({
  title: z.string().min(4, 'Informe a atividade que deseja realizar'),
  desiredWeeklyFrequency: z.coerce.number().int().min(1).max(7),
})

type CreateGoalSchema = z.infer<typeof createGoalSchema>

export function CreateGoal() {
  const {
    handleSubmit,
    register,
    control,
    reset,
    formState: { errors },
  } = useForm<CreateGoalSchema>({
    resolver: zodResolver(createGoalSchema),
  })

  // Create a ref for the DialogClose button
  const dialogCloseRef = useRef<HTMLButtonElement | null>(null)

  async function handleCreateGoal({
    title,
    desiredWeeklyFrequency,
  }: CreateGoalSchema) {
    await createGoal({ title, desiredWeeklyFrequency })

    reset()

    // Close the dialog after saving
    if (dialogCloseRef.current) {
      dialogCloseRef.current.click()
    }
  }

  return (
    <DialogContent>
      <div className=" flex flex-col  gap-6 h-full ">
        <div className="flex flex-col gap-3">
          <DialogHeader>
            <div className="flex items-center justify-between">
              <DialogTitle>Cadastrar meta</DialogTitle>
              <DialogClose>
                <X className="size-4 text-zinc-600" />
              </DialogClose>
            </div>
          </DialogHeader>
          <DialogDescription className="text-zinc-400 font-normal leading-relaxed text-sm">
            Adicione atividades que{' '}
            <span className="underline">te fazem bem</span> e que você quer
            continuar praticando toda semana.
          </DialogDescription>
        </div>
        <form
          onSubmit={handleSubmit(handleCreateGoal)}
          className="flex flex-1 flex-col justify-between"
        >
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <Label htmlFor="title" className="text-sm font-medium text-100">
                Qual a atividade?
              </Label>
              <Input
                autoFocus
                className="bg-black placeholder:text-zinc-400  border-none focus-visible:ring-offset-pink-700 "
                placeholder="Praticar exercícios, meditar, etc..."
                id="title"
                {...register('title')}
              />

              {errors.title && (
                <span className="text-xs text-pink-500">
                  {errors.title.message}
                </span>
              )}
            </div>
            <div className="flex flex-col  gap-2 ">
              <Label className="text-sm font-medium text-100">
                Quantas vezes na semana?
              </Label>

              <Controller
                control={control}
                name="desiredWeeklyFrequency"
                defaultValue={5}
                render={({ field }) => {
                  return (
                    <RadioGroup
                      onValueChange={field.onChange}
                      value={String(field.value)}
                    >
                      <WeekFrequencyRadioGroup />
                    </RadioGroup>
                  )
                }}
              />
            </div>
          </div>

          <div className="flex items-center gap-3 mt-4">
            <DialogClose asChild>
              <Button ref={dialogCloseRef} type="button" className="flex-1 ">
                Fechar
              </Button>
            </DialogClose>

            <Button
              type="submit"
              className="flex-1 bg-violet-500 hover:bg-violet-600"
            >
              Salvar
            </Button>
          </div>
        </form>
      </div>
    </DialogContent>
  )
}
