import { Tab, TabList, TabPanel, TabPanels, Tabs, List, ListItem, ListIcon } from "@chakra-ui/react";

export default function Dashboard() {
  return (
    <Tabs mt="40px" p="20px" colorScheme="purple" variant="enclosed">
      <TabList>
        <Tab _selected={{ color: 'white', bg: 'blue.900'}}>LDBEL009.CTR_COMAND</Tab>
        <Tab _selected={{ color: 'white', bg: 'blue.900'}}>DC Loads | LDBEL009.CTR_COMAND</Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          <List color="white" fontSize="1.2em" spacing={4} overflowY="auto" maxHeight="500px">
          <iframe src="https://g.circadian.dev/dashboard-solo/snapshot/t1zbIThsFzicCCfKK8CQGy2gqAYjNZdT?orgId=0&refresh=15m&from=1701771933777&to=1702376733777&panelId=48" width="1100" height="300" frameborder="0"></iframe>
          <iframe src="https://g.circadian.dev/dashboard-solo/snapshot/t1zbIThsFzicCCfKK8CQGy2gqAYjNZdT?orgId=0&refresh=15m&from=1701771933777&to=1702376733777&panelId=23" width="1100" height="300" frameborder="0"></iframe>
          <iframe src="https://g.circadian.dev/dashboard-solo/snapshot/t1zbIThsFzicCCfKK8CQGy2gqAYjNZdT?orgId=0&refresh=15m&from=1701771933777&to=1702376733777&panelId=5" width="1100" height="300" frameborder="0"></iframe>
          <iframe src="https://g.circadian.dev/dashboard-solo/snapshot/t1zbIThsFzicCCfKK8CQGy2gqAYjNZdT?orgId=0&refresh=15m&from=1701771933777&to=1702376733777&panelId=28" width="1100" height="400" frameborder="0"></iframe>
          <iframe src="https://g.circadian.dev/dashboard-solo/snapshot/t1zbIThsFzicCCfKK8CQGy2gqAYjNZdT?orgId=0&refresh=15m&from=1701771933777&to=1702376733777&panelId=51" width="1100" height="300" frameborder="0"></iframe>
          <iframe src="https://g.circadian.dev/dashboard-solo/snapshot/t1zbIThsFzicCCfKK8CQGy2gqAYjNZdT?orgId=0&refresh=15m&from=1701771933777&to=1702376733777&panelId=52" width="1100" height="300" frameborder="0"></iframe>
          <iframe src="https://g.circadian.dev/dashboard-solo/snapshot/t1zbIThsFzicCCfKK8CQGy2gqAYjNZdT?orgId=0&refresh=15m&from=1701771933777&to=1702376733777&panelId=53" width="1100" height="300" frameborder="0"></iframe>
          <iframe src="https://g.circadian.dev/dashboard-solo/snapshot/t1zbIThsFzicCCfKK8CQGy2gqAYjNZdT?orgId=0&refresh=15m&from=1701771933777&to=1702376733777&panelId=64" width="1100" height="600" frameborder="0"></iframe>
          <iframe src="https://g.circadian.dev/dashboard-solo/snapshot/t1zbIThsFzicCCfKK8CQGy2gqAYjNZdT?orgId=0&refresh=15m&from=1701771933777&to=1702376733777&panelId=63" width="1100" height="1200" frameborder="0"></iframe>
          </List>
        </TabPanel>
        <TabPanel>
          <List color="white" fontSize="1.2em" spacing={4} overflowY="auto" maxHeight="500px">
          <iframe src="https://g.circadian.dev/dashboard-solo/snapshot/t1zbIThsFzicCCfKK8CQGy2gqAYjNZdT?orgId=0&refresh=15m&from=1701771933777&to=1702376733777&panelId=56" width="1100" height="300" frameborder="0"></iframe>
          <iframe src="https://g.circadian.dev/dashboard-solo/snapshot/t1zbIThsFzicCCfKK8CQGy2gqAYjNZdT?orgId=0&refresh=15m&from=1701771933777&to=1702376733777&panelId=58" width="1100" height="300" frameborder="0"></iframe>
          <iframe src="https://g.circadian.dev/dashboard-solo/snapshot/t1zbIThsFzicCCfKK8CQGy2gqAYjNZdT?orgId=0&refresh=15m&from=1701771933777&to=1702376733777&panelId=57" width="1100" height="300" frameborder="0"></iframe>
          <iframe src="https://g.circadian.dev/dashboard-solo/snapshot/t1zbIThsFzicCCfKK8CQGy2gqAYjNZdT?orgId=0&refresh=15m&from=1701771933777&to=1702376733777&panelId=59" width="1100" height="300" frameborder="0"></iframe>
          </List>
        </TabPanel>
      </TabPanels>
    </Tabs>
  )
}
