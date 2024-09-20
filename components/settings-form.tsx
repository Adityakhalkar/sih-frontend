import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"

export function SettingsForm() {
  return (
    <form className="space-y-8">
      <div className="space-y-2">
        <h3 className="text-lg font-medium">Personal Information</h3>
        <div className="grid gap-2">
          <Label htmlFor="name">Name</Label>
          <Input id="name" placeholder="John Doe" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" placeholder="johndoe@example.com" type="email" />
        </div>
      </div>
      <div className="space-y-2">
        <h3 className="text-lg font-medium">Notification Preferences</h3>
        <div className="flex items-center space-x-2">
          <Checkbox id="email-notifications" />
          <Label htmlFor="email-notifications">Receive email notifications</Label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="sms-notifications" />
          <Label htmlFor="sms-notifications">Receive SMS notifications</Label>
        </div>
      </div>
      <div className="space-y-2">
        <h3 className="text-lg font-medium">System Settings</h3>
        <div className="grid gap-2">
          <Label htmlFor="theme">Theme</Label>
          <Select>
            <SelectTrigger id="theme">
              <SelectValue placeholder="Select theme" />
            </SelectTrigger>
            <SelectContent className="bg-background">
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="grid gap-2">
          <Label htmlFor="language">Language</Label>
          <Select>
            <SelectTrigger id="language">
              <SelectValue placeholder="Select language" />
            </SelectTrigger>
            <SelectContent className="bg-background">
              <SelectItem value="en">English</SelectItem>
              <SelectItem value="fr">French</SelectItem>
              <SelectItem value="de">German</SelectItem>
              <SelectItem value="es">Spanish</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <Button type="submit">Save Settings</Button>
    </form>
  )
}