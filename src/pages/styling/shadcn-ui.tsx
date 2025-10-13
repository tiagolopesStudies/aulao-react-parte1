import { AlertCircleIcon } from 'lucide-react'
import { useState } from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Calendar } from '@/components/ui/calendar'

export function ShadcnUIPage() {
  const [date, setDate] = useState<Date | undefined>(new Date())

  return (
    <div className="flex flex-col items-center gap-4 p-8">
      <h1 className="text-xl font-semibold text-center">Shadcn UI Page</h1>
      <p className="text-center">Welcome to the Shadcn UI Page!</p>

      <h2>Accordion</h2>
      <Accordion type="single" collapsible className="w-3/5" defaultValue="item-1">
        <AccordionItem value="item-1">
          <AccordionTrigger>Product Information</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance">
            <p>
              Our flagship product combines cutting-edge technology with sleek design.
              Built with premium materials, it offers unparalleled performance and
              reliability.
            </p>
            <p>
              Key features include advanced processing capabilities, and an intuitive user
              interface designed for both beginners and experts.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Shipping Details</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance">
            <p>
              We offer worldwide shipping through trusted courier partners. Standard
              delivery takes 3-5 business days, while express shipping ensures delivery
              within 1-2 business days.
            </p>
            <p>
              All orders are carefully packaged and fully insured. Track your shipment in
              real-time through our dedicated tracking portal.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Return Policy</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance">
            <p>
              We stand behind our products with a comprehensive 30-day return policy. If
              you&apos;re not completely satisfied, simply return the item in its original
              condition.
            </p>
            <p>
              Our hassle-free return process includes free return shipping and full
              refunds processed within 48 hours of receiving the returned item.
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <h2>Alerta</h2>
      <div>
        <Alert variant="destructive">
          <AlertCircleIcon />
          <AlertTitle>Alerta de exemplo</AlertTitle>
          <AlertDescription>
            <p>Please verify your billing information and try again.</p>
            <ul className="list-inside list-disc text-sm">
              <li>Check your card details</li>
              <li>Ensure sufficient funds</li>
              <li>Verify billing address</li>
            </ul>
          </AlertDescription>
        </Alert>
      </div>

      <h2>Calendário</h2>
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-lg border bg-zinc-900"
      />
    </div>
  )
}
